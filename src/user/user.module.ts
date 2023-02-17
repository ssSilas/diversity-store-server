import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersEntity } from './user.entity';

@Module({
  controllers: [],
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
