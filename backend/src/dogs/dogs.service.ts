import { Injectable } from '@nestjs/common';
import { Dogs } from '@prisma/client'; 
import { DogsRepository } from "./dogs.repository";

@Injectable()
export class DogsService {

    constructor(private readonly dogsRepository: DogsRepository){ }

    async getAll(): Promise<Dogs[]> {

        const dogs = await this.dogsRepository.getAll();

        return dogs;
    }
}
