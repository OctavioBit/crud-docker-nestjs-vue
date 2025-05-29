import { Injectable } from '@nestjs/common';
import { PrismaClient, Dog } from '@prisma/client'; 

const prisma = new PrismaClient();

@Injectable()
export class ShapeShifterRepository {

    async getById(modelName: string, id: number): Promise<any> {

        const model = await prisma[modelName].findUnique({
            where: {
                id: id,
            },
        });

        return model;
    }

    async getAll(modelName: string, filters: any): Promise<any[]> {

        const models = await prisma[modelName].findMany({
            where: filters,
        });

        return models;
    }

    async delete(modelName: string, id: number): Promise<void> {

        const result = await prisma[modelName].delete({
            where: {
                id: Number(id),
            },
        })
    }
/*
    
    
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

    
    */
}
