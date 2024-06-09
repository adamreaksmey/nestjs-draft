import {
  Controller,
  Get,
  Logger,
  Param,
  Query,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ModuleOneService } from './moduleExample1.service';

@Controller()
export class moduleOneController {
  private readonly logger: Logger;
  constructor(private m1Service: ModuleOneService) {
    this.logger = new Logger('M1_Service');
  }

  @Get('m1/hello')
  sayHello() {
    const response = this.m1Service.moduleOneService();
    return response;
  }
}
