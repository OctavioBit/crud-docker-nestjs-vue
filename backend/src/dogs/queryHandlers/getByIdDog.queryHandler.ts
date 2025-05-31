import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetByIdDogQuery } from '../querys/getByIdDog.query';
import { ShapeShifterService } from 'src/shapeshifter.service';

@QueryHandler(GetByIdDogQuery)
export class GetByIdDogQueryHandler implements IQueryHandler<GetByIdDogQuery> {

    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(query: GetByIdDogQuery) {
        
        const dog = await this.shapeShifterService.getById("dog",query.getId());

        return dog;
    }
}
