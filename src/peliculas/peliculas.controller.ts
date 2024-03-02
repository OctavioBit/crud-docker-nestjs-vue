import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPeliculasQuery } from './querys/getPeliculasQuery.query';

@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly queryBus: QueryBus) { }

    @Get('getPeliculas')
    async getPeliculas() {
        const query = new GetPeliculasQuery();
        const peliculas = await this.queryBus.execute(query);
        return peliculas;
    }
}
