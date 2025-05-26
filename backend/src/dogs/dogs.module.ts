import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogsRepository } from './dogs.repository';
import { GetByIdDogQueryHandler } from './queryHandlers/getByIdDog.queryHandler';
import { GetAllDogsQueryHandler } from './queryHandlers/getAllDogs.queryHandler';
import { NewDogCommandHandler } from './commandHandlers/newDog.commandHandler';
import { DeleteDogCommandHandler } from './commandHandlers/deleteDog.commandHandler';

export const QueryHandlers = [ GetAllDogsQueryHandler, GetByIdDogQueryHandler ];
export const CommandHandlers = [NewDogCommandHandler, DeleteDogCommandHandler ];

@Module({
      imports: [CqrsModule],
  controllers: [DogsController],
    providers: [DogsService, 
                DogsRepository,
                ...QueryHandlers,
                ...CommandHandlers]
})

export class DogsModule {}
