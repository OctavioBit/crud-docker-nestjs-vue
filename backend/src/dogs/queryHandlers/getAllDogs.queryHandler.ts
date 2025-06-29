import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDogsQuery } from '../querys/getAllDogs.query';
import { ShapeShifterService } from 'src/shapeshifter.service';

@QueryHandler(GetAllDogsQuery)
export class GetAllDogsQueryHandler implements IQueryHandler<GetAllDogsQuery> {

    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(query: GetAllDogsQuery) {
        
        const { name, sex, sterilized, birthdateFrom , birthdateTo } = query.getFilters();
                
        const filters = {
                            name: name ? { contains: name } : undefined,
                            sex: sex ? { equals: sex } : undefined,
                            sterilized: sterilized !== undefined ? sterilized === 'true' : undefined,
                            birthdate: {}                            
                        };

        if(birthdateFrom || birthdateTo){
            filters.birthdate = {...(birthdateFrom && { gte: new Date(birthdateFrom) }),
                                 ...(  birthdateTo && { lte: new Date(birthdateTo)   }) };
        }

        const dogs = await this.shapeShifterService.getAll("dog", filters);
        
        return dogs;
    }
}
