import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetPeliculasQuery } from '../querys/getPeliculasQuery.query';
import { PeliculasService } from '../domain/peliculas.service';

@QueryHandler(GetPeliculasQuery)
export class GetPeliculasQueryHandler implements IQueryHandler<GetPeliculasQuery> {

    constructor(private readonly peliculasService: PeliculasService) { }

    async execute(query: GetPeliculasQuery) {
        
        const peliculas = await this.peliculasService.findAll();
        
        return peliculas;
    }
}
