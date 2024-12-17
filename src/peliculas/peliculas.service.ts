import { Injectable } from '@nestjs/common';
import { Pelicula, PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

@Injectable()
export class PeliculasService { 

    async findAll(): Promise<Pelicula[]> {

        const peliculas = await prisma["pelicula"].findMany();

        return peliculas;
    }
}
