import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './lib/DatabaseModule';
import { ModuleOneExample } from './handler/moduleExample1/moduleExample1.module';
import { ModuleTwoExample } from './handler/moduleExample2/moduleExample2.module';

@Module({
  imports: [
    // HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        ENVIRONMENT: Joi.string().required(),
      }),
      envFilePath: '.env',
    }),
    ModuleOneExample,
    ModuleTwoExample,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
