import { Module } from '@nestjs/common';
import { CrearPerroCommandHandler } from './commandHandlers/crearPerro.commandHandler';
import { PerrosController } from './perros.controller';
import { PerrosService } from './perros.service';
import { CqrsModule } from '@nestjs/cqrs';

export const CommandHandlers = [CrearPerroCommandHandler];

@Module({
  imports:[CqrsModule],
  controllers: [PerrosController],
  providers: [PerrosService,
    ...CommandHandlers]
})

export class PerrosModule {}
