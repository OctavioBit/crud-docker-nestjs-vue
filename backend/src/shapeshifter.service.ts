import { Injectable } from '@nestjs/common';
import { ShapeShifterRepository } from './shapeshifter.repository';

@Injectable()
export class ShapeShifterService {

    constructor(private readonly shapeShifterRepository: ShapeShifterRepository){ }

    async getById(modelName: string, id: number): Promise<any> {

        const model = await this.shapeShifterRepository.getById(modelName,id);

        return model;
    }

    async getAll(modelName:string, filters: any): Promise<any[]> {

        const models = await this.shapeShifterRepository.getAll(modelName,filters);

        return models;
    }

    async delete(modelName:string, id: number): Promise<void> {

        this.shapeShifterRepository.delete(modelName,id);
    }

    async new(modelName: string, newModel: any): Promise<any> {

        const model = await this.shapeShifterRepository.new(modelName,newModel);

        return model;
    }
    
    async updateById(modelName:string,id: number, modelUpdate:any): Promise<any> {

        const model = await this.shapeShifterRepository.updateById(modelName,id, modelUpdate);

        return model;
    }
}
