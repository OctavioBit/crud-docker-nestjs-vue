import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogsRepository } from './dogs.repository';
import { GetByIdDogQueryHandler } from './queryHandlers/getByIdDog.queryHandler';
import { GetAllDogsQueryHandler } from './queryHandlers/getAllDogs.queryHandler';

export const QueryHandlers = [GetAllDogsQueryHandler,GetByIdDogQueryHandler];

@Module({
      imports: [CqrsModule],
  controllers: [DogsController],
    providers: [DogsService, 
                DogsRepository,
                ...QueryHandlers]
})

export class DogsModule {}
