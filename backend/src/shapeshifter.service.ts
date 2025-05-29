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

    /*
    
    

    async newDog(name: string, 
                  sex: string, 
           sterilized: boolean, 
            birthdate: Date) : Promise<Dog> {
                
        const dog = await this.dogRepository.newDog(name, sex, sterilized, birthdate);

        return dog;
    }

    async updateDog(id: number,
                    name: string,
                    sex: string,
                    sterilized: boolean,
                    birthdate: Date): Promise<Dog> {

        const dog = await this.dogRepository.updateDog(id,name, sex, sterilized, birthdate);

        return dog;
    }

    
    */
}
