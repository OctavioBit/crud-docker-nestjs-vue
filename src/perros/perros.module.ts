import { Module } from '@nestjs/common';
import { CrearPerroCommandHandler } from './commandHandlers/crearPerro.commandHandler';
import { GetPerroQueryHandler } from './queryHandlers/getPerro.queryHandler';
import { PerrosController } from './perros.controller';
import { PerrosService } from './perros.service';
import { CqrsModule } from '@nestjs/cqrs';

export const CommandHandlers = [CrearPerroCommandHandler];
export const QueryHandlers = [GetPerroQueryHandler];

@Module({
  imports:[CqrsModule],
  controllers: [PerrosController],
  providers: [PerrosService,
    ...CommandHandlers,
    ...QueryHandlers]
})

export class PerrosModule {}
