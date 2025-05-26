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

    async getById(id: number): Promise<Dogs> {
        
        const dog = await prisma["dogs"].findUnique({
            where: {
                id: id,
            },
        });

        return dog;
    }

    async newDog(name: string,
        sex: string,
        sterilized: boolean,
        birthdate: Date): Promise<Dogs> {

        const dog = await prisma["dogs"].create({
                                                    data: {
                                                        name: name,
                                                        sex: sex,
                                                        sterilized: sterilized,
                                                        birthdate: birthdate }});

        return dog;
    }

    async deleteDog(id: number): Promise<void> {
                
        const result = await prisma["dogs"].delete({
            where: {
                id: Number(id),
            },
        })        
    }
}
