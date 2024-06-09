import { v4 as uuid } from 'uuid';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ModuleOneService {
  constructor() {}

  async moduleOneService(): Promise<string> {
    const message: string = 'Hello world from module one service';
    return message;
  }
}
