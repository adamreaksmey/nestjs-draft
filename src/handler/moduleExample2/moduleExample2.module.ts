import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ModuleTwoTable from './entities/module2.entity';
import { ModuleTwoService } from './moduleExample2.service';
import { ModuleTwoController } from './moduleExample2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleTwoTable])],
  controllers: [ModuleTwoController],
  providers: [ModuleTwoService],
  exports: [ModuleTwoService],
})
export class ModuleTwoExample {}
