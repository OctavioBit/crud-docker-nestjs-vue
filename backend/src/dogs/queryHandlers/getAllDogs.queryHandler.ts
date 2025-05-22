import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDogsQuery } from '../querys/getAllDogs.query';
import { DogsService } from '../dogs.service';

@QueryHandler(GetAllDogsQuery)
export class GetAllDogsQueryHandler implements IQueryHandler<GetAllDogsQuery> {

    constructor(private readonly dogsService: DogsService) { }

    async execute(query: GetAllDogsQuery) {
        
        const dogs = await this.dogsService.getAll(query.getFilters());
        
        return dogs;
    }
}
