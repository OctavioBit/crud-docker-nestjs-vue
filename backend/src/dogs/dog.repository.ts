import { Injectable } from '@nestjs/common';
import { PrismaClient, Dog } from '@prisma/client'; 
import { DogFilters } from './dog.filters';

const prisma = new PrismaClient();

@Injectable()
export class DogRepository {

    async getAll(filters: DogFilters): Promise<Dog[]> {

        const { name, sex, sterilized, birthdate } = filters;

        const dogs = await prisma["dog"].findMany({
            where: {
                name: name ? { contains: name } : undefined,
                sex: sex ? { equals: sex } : undefined,
                sterilized: sterilized !== undefined ? sterilized === 'true' : undefined,
                birthdate: birthdate ? new Date(birthdate) : undefined,
            },
        });

        return dogs;
    }

    async getById(id: number): Promise<Dog> {
        
        const dog = await prisma["dog"].findUnique({
            where: {
                id: id,
            },
        });

        return dog;
    }

    async newDog(name: string,
        sex: string,
        sterilized: boolean,
        birthdate: Date): Promise<Dog> {

        const dog = await prisma["dog"].create({
                                                    data: {
                                                        name: name,
                                                        sex: sex,
                                                        sterilized: sterilized,
                                                        birthdate: birthdate }});

        return dog;
    }

    async updateDog(id: number,
                    name: string,
                    sex: string,
                    sterilized: boolean,
                    birthdate: Date): Promise<Dog> {

        const dog = await prisma["dog"].update({
            where: { id: id },
            data: {
                name: name,
                sex: sex,
                sterilized: sterilized,
                birthdate: birthdate
            }
        });

        return dog;
    }

    async deleteDog(id: number): Promise<void> {
                
        const result = await prisma["dog"].delete({
            where: {
                id: Number(id),
            },
        })        
    }
}
