import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDogsQuery } from '../querys/getAllDogs.query';
import { DogService } from '../dog.service';

@QueryHandler(GetAllDogsQuery)
export class GetAllDogsQueryHandler implements IQueryHandler<GetAllDogsQuery> {

    constructor(private readonly dogsService: DogService) { }

    async execute(query: GetAllDogsQuery) {
        
        const dogs = await this.dogsService.getAll(query.getFilters());
        
        return dogs;
    }
}
