import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersEntity } from './user.entity';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: "UsersEntity",
      useValue: UsersEntity
    }
  ],
  exports:["UsersEntity",UserService]
})
export class UserModule { }
