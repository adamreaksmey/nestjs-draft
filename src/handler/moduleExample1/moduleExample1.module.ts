import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ModuleOneTable from './entities/module1.entity';
import { ModuleOneService } from './moduleExample1.service';
import { ModuleOneController } from './moduleExample1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleOneTable])],
  controllers: [ModuleOneController],
  providers: [ModuleOneService],
  exports: [ModuleOneService],
})
export class ModuleOneExample {}
