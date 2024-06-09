import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { urlencoded, json } from 'express';
import { AppModule } from './app.module';
// import runMigrationAutomation from './lib/utils/migration-automation';
// import { RmqService } from './lib/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // This is to increase file size limit in each request
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  // Access to configService to read .env
  const configService = app.get(ConfigService);

  app.startAllMicroservices();
  // await runMigrationAutomation(configService)
  await app.listen(configService.get('PORT'));
}
bootstrap();
