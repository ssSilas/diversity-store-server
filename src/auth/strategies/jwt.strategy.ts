import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import configEnv from "config/config.env";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configEnv().secretKey
    })
  }

  async validate(payload: any) {
    return {
      id: payload.data.id,
      email: payload.data.email,
      roles: payload.data.roles
    }
  }
}