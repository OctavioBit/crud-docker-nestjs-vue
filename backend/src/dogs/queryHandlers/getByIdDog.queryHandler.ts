import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetByIdDogQuery } from '../querys/getByIdDog.query';
import { DogService } from '../dog.service';

@QueryHandler(GetByIdDogQuery)
export class GetByIdDogQueryHandler implements IQueryHandler<GetByIdDogQuery> {

    constructor(private readonly dogsService: DogService) { }

    async execute(query: GetByIdDogQuery) {
        
        const dogs = await this.dogsService.getById(query.getId());
        
        return dogs;
    }
}
