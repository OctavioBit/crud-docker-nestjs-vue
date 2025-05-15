import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetAllDogsQueryHandler } from './queryHandlers/getAllDogs.queryHandler';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

export const QueryHandlers = [GetAllDogsQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [DogsController],
  providers: [DogsService, 
    ...QueryHandlers]
})
export class DogsModule {}
