import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

import { SequelizeModule } from '@nestjs/sequelize';
import configEnv from 'config/config.env';
import { UsersEntity } from './user/user.entity';
import { ProductsEntity } from './products/products.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configEnv]
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: configEnv().dataBase.host,
      port: parseInt(configEnv().dataBase.port),
      username: configEnv().dataBase.user,
      password: configEnv().dataBase.password,
      database: configEnv().dataBase.dbName,
      models: [UsersEntity, ProductsEntity],
      // autoLoadModels: true,
      // synchronize: true,
      define: {
        freezeTableName: true,
        timestamps: false
      }
    }),
    AuthModule,
    UserModule,
    ProductsModule
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
