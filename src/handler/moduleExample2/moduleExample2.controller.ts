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
import { ModuleTwoService } from './moduleExample2.service';

@Controller()
export class ModuleTwoController {
  private readonly logger: Logger;
  constructor(private m2Service: ModuleTwoService) {
    this.logger = new Logger('M2_Service');
  }

  @Get('m2/hello')
  async sayHello() {
    const response = await this.m2Service.moduleTwoService();
    return response;
  }
}
