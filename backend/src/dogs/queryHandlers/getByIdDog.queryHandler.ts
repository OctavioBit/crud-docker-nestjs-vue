import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetByIdDogQuery } from '../querys/getByIdDog.query';
import { DogsService } from '../dogs.service';

@QueryHandler(GetByIdDogQuery)
export class GetByIdDogQueryHandler implements IQueryHandler<GetByIdDogQuery> {

    constructor(private readonly dogsService: DogsService) { }

    async execute(query: GetByIdDogQuery) {
        
        const dogs = await this.dogsService.getById(query.getId());
        
        return dogs;
    }
}
