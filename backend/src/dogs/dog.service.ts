import { Injectable } from '@nestjs/common';
import { Dog } from '@prisma/client'; 
import { DogRepository } from "./dog.repository";
import { DogFilters } from './dog.filters';

@Injectable()
export class DogService {

    constructor(private readonly dogRepository: DogRepository){ }

    async getAll(filters : DogFilters): Promise<Dog[]> {

        const dogs = await this.dogRepository.getAll(filters);

        return dogs;
    }

    async getById(id: number): Promise<Dog> {

        const dog = await this.dogRepository.getById(id);

        return dog;
    }

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

    async deleteDog(id: number): Promise<void> {

        this.dogRepository.deleteDog(id);
    }
}
