import { Injectable } from '@nestjs/common';
import { PrismaClient, Dogs } from '@prisma/client'; 
import { DogsFilters } from './dogs.filters';

const prisma = new PrismaClient();

@Injectable()
export class DogsRepository {

    async getAll(filters: DogsFilters): Promise<Dogs[]> {

        const { name, sex, sterilized, birthdate } = filters;

        const dogs = await prisma["dogs"].findMany({
            where: {
                name: name ? { contains: name } : undefined,
                sex: sex ? { equals: sex } : undefined,
                sterilized: sterilized !== undefined ? sterilized === 'true' : undefined,
                birthdate: birthdate ? new Date(birthdate) : undefined,
            },
        });

        return dogs;
    }
}
