import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDogsQuery } from '../querys/getAllDogsQuery.query';
import { DogsRepository } from '../dogs.repository';

@QueryHandler(GetAllDogsQuery)
export class GetAllDogsQueryHandler implements IQueryHandler<GetAllDogsQuery> {

    constructor(private readonly dogsRepository: DogsRepository) { }

    async execute(query: GetAllDogsQuery) {
        
        const dogs = await this.dogsRepository.getAll();
        
        return dogs;
    }
}
