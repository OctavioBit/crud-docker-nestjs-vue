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

    async new(modelName: string, newModel:any): Promise<any> {

        const model = await prisma[modelName].create({data: newModel});

        return model;
    }

    async updateById(modelName: string, id: number, updateModel: any): Promise<any> {

        const model = await prisma[modelName].update({
            where: { id: id },
            data: updateModel
        });

        return model;
    }
}
