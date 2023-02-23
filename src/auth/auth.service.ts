import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { createHash } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from 'src/user/user.entity';
import { CreateUserDto, UserDataForTokenDto } from 'utils/dto/user.dto';
import configEnv from 'config/config.env';

@Injectable()
export class Tokengenerate {
  constructor(
    private readonly jwtService: JwtService
  ) { }

  async tokenApidot8(user: UserDataForTokenDto, server: string) {
    const secretKey: string = configEnv().secretKey;

    const duration_token_web: string = configEnv().durationToken;//horas : minutos
    let duration: string = duration_token_web;
    let date = Date.now();
    let time = duration.split(':');
    let hours: number = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let oneMinute = 60000;
    console.log(user)
    let expiration = date + hours * 60 * oneMinute + minutes * oneMinute;
    const objTokengenerate: object = {
      iss: server,
      aud: server,
      exp: parseInt(expiration.toString().slice(0, 10)),
      iat: Math.round(date / 1000),
      nbf: Math.round(date / 1000),
      data: {
        id: user.id,
        email: user.email,
        roles: user.roles
      }
    }
    return {
      token: this.jwtService.sign(objTokengenerate, {
        secret: secretKey, algorithm: 'HS256',
      }),
      roles: user.roles
    }
  }
}
@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersEntity')
    private userRepo: typeof UsersEntity,

    private readonly tokenGenerate: Tokengenerate,
    private readonly userService: UserService
  ) { }

  async createUser(data: CreateUserDto) {
    try {
      //validations
      await this.userService.emailExist(data.email)
      await this.userService.loginExist(data.login)

      const generatePass = this.createHashForPass(data.password)
      return await this.userRepo.create({
        name: data.name,
        email: data.email,
        login: data.login,
        roles: data.roles,
        password: generatePass,
        status: 1,
      })
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async login(user: UserDataForTokenDto, host: string) {
    try {
      return await this.tokenGenerate.tokenApidot8(user, host)
    } catch (error) {
      throw error
    }
  }

  async validateUser(login: string, password: string) {
    let user: UsersEntity
    let compare: boolean

    try {
      user = await this.userService.findByLogin(login)
      const passForCompare = this.createHashForPass(password)
      compare = passForCompare === user.password;

      const payload: object = {
        id: user.id,
        email: user.email,
        roles: user.roles
      }
      if (!compare) return null
      return payload
    } catch (error) {
      throw error
    }
  }

  createHashForPass(password: string) {
    const salt: string = configEnv().salt;
    const baseHash = String(salt + password)
    const hash = createHash('sha1').update(baseHash).digest('hex')
    return hash
  }
}