import { Module } from '@nestjs/common';
import { PerrosService } from './perros.service';
import { PerrosController } from './perros.controller';

@Module({
  controllers: [PerrosController],
  providers: [PerrosService],
})
export class PerrosModule {}
