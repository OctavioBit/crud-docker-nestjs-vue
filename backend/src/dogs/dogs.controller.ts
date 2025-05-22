import { Controller,Get, Query, ParseIntPipe } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllDogsQuery } from './querys/getAllDogs.query';
import { GetByIdDogQuery } from './querys/getByIdDog.query';
import { DogsFilters } from './dogs.filters';

@Controller('dogs')
export class DogsController {

    constructor(private readonly queryBus: QueryBus) { }

    @Get("ping")
    getPing(): string {
        return "Dogs ping!";
    }

    @Get("getAll")
    async getAll(@Query() filters: DogsFilters) {
        const query = new GetAllDogsQuery(filters);
        const dogs = await this.queryBus.execute(query);
        return dogs;
    }

    @Get("getById")
    async getById(@Query('id', ParseIntPipe) id: number){
        const query = new GetByIdDogQuery(id);
        const dog = this.queryBus.execute(query);

        return dog;
    }

}
