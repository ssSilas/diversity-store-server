import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import configEnv from 'config/config.env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //cors config
  app.enableCors({
    origin:'http://localhost:3000',
    methods:["GET,PUT,POST,DELETE"],
    allowedHeaders:['Content-Type', 'Authorization']
  })

  const configSwagger = new DocumentBuilder()
    .setTitle("Diversity Store - Server")
    .setDescription('Simulando uma loja virtual com 2 níveis de acesso')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    },
      'access-token',)
    .addTag('auth')
    .addTag('products')
    .build()

  const document = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('docs', app, document)

  await app.listen(configEnv().aplicationPort);
  console.log(`\nRunning port: http://127.0.0.1:${configEnv().aplicationPort}`)
  console.log(`Swagger docs: http://127.0.0.1:${configEnv().aplicationPort}/docs\n`)
}
bootstrap();
