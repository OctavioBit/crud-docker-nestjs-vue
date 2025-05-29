import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetByIdDogQuery } from '../querys/getByIdDog.query';
import { ShapeShifterService } from 'src/shapeshifter.service';
//import { DogService } from '../dog.service';

@QueryHandler(GetByIdDogQuery)
export class GetByIdDogQueryHandler implements IQueryHandler<GetByIdDogQuery> {

    //constructor(private readonly dogsService: DogService) { }
    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(query: GetByIdDogQuery) {
                
        //const dog = await this.dogsService.getById(query.getId());
        
        const dog = await this.shapeShifterService.getById("dog",query.getId());

        return dog;
    }
}
