import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { DogRepository } from './dog.repository';
import { GetByIdDogQueryHandler } from './queryHandlers/getByIdDog.queryHandler';
import { GetAllDogsQueryHandler } from './queryHandlers/getAllDogs.queryHandler';
import { NewDogCommandHandler } from './commandHandlers/newDog.commandHandler';
import { DeleteDogCommandHandler } from './commandHandlers/deleteDog.commandHandler';

export const QueryHandlers = [ GetAllDogsQueryHandler, GetByIdDogQueryHandler ];
export const CommandHandlers = [NewDogCommandHandler, DeleteDogCommandHandler ];

@Module({
      imports: [CqrsModule],
  controllers: [DogController],
    providers: [DogService, 
                DogRepository,
                ...QueryHandlers,
                ...CommandHandlers]
})

export class DogModule {}
