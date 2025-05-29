import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { DogRepository } from './dog.repository';
import { GetByIdDogQueryHandler } from './queryHandlers/getByIdDog.queryHandler';
import { GetAllDogsQueryHandler } from './queryHandlers/getAllDogs.queryHandler';
import { NewDogCommandHandler } from './commandHandlers/newDog.commandHandler';
import { DeleteDogCommandHandler } from './commandHandlers/deleteDog.commandHandler';
import { UpdateDogCommandHandler } from './commandHandlers/updateDog.commandHandler';
import { ShapeShifterService } from 'src/shapeshifter.service';
import { ShapeShifterRepository } from 'src/shapeshifter.repository';

export const QueryHandlers = [ GetAllDogsQueryHandler, GetByIdDogQueryHandler ];
export const CommandHandlers = [NewDogCommandHandler, DeleteDogCommandHandler, UpdateDogCommandHandler];

@Module({
      imports: [CqrsModule],
  controllers: [DogController],
    providers: [DogService, 
                DogRepository,
                ShapeShifterService,
                ShapeShifterRepository,
                ...QueryHandlers,
                ...CommandHandlers]
})

export class DogModule {}
