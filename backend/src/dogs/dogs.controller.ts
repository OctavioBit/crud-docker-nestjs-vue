import { Controller,Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllDogsQuery } from './querys/getAllDogsQuery.query';
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

}
