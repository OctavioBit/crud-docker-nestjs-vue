import { Injectable } from '@nestjs/common';
import { Repository } from '../repository/repository';
import { Pelicula, PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

@Injectable()
export class PeliculasService { 

    async findAll(): Promise<Pelicula[]> {

        const peliculas = await prisma["pelicula"].findMany();

        return peliculas;
    }
}
