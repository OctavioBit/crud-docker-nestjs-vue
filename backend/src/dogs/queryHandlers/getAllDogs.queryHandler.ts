import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDogsQuery } from '../querys/getAllDogs.query';
import { ShapeShifterService } from 'src/shapeshifter.service';

@QueryHandler(GetAllDogsQuery)
export class GetAllDogsQueryHandler implements IQueryHandler<GetAllDogsQuery> {

    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(query: GetAllDogsQuery) {
        
        const { name, sex, sterilized, birthdate } = query.getFilters();

        const filters = {
                            name: name ? { contains: name } : undefined,
                            sex: sex ? { equals: sex } : undefined,
                            sterilized: sterilized !== undefined ? sterilized === 'true' : undefined,
                            birthdate: birthdate ? new Date(birthdate) : undefined,
                        };

        const dogs = await this.shapeShifterService.getAll("dog", filters);
        
        return dogs;
    }
}
