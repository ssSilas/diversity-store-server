import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import configEnv from 'config/config.env';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configEnv().aplicationPort);
  console.log(` \nRunning port: http://127.0.0.1:${configEnv().aplicationPort}\n`)
}
bootstrap();
