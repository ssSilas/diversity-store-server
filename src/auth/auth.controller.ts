import { Body, Controller, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto, SignInDto, UserDataForTokenDto } from 'utils/dto/user.dto';
import { User } from 'utils/custom-decorator/user.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Host } from 'utils/custom-decorator/host.decorator';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('add-user')
  async createUser(@Body() body: CreateUserDto) {
    try {
      return await this.authService.createUser(body)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: SignInDto })
  async login(@User() user: UserDataForTokenDto, @Host() host: string) {
    try {
      return await this.authService.login(user, host)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

}
