import { Injectable } from '@nestjs/common';

@Injectable()
export class PeliculasService { 

    async findAll(): Promise<string[]> {

        const peliculas = ["Pelicula 1", "Pelicula 2"];

        return peliculas;
    }
}
