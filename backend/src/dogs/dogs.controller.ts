import { Controller,Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllDogsQuery } from './querys/getAllDogsQuery.query';

@Controller('dogs')
export class DogsController {

    constructor(private readonly queryBus: QueryBus) { }

    @Get("ping")
    getPing(): string {
        return "Dogs ping!";
    }

    @Get("getAll")
    async getAll() {
        const query = new GetAllDogsQuery();
        const dogs = await this.queryBus.execute(query);
        return dogs;
    }

}
