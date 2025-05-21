import { Injectable } from '@nestjs/common';
import { Dogs } from '@prisma/client'; 
import { DogsRepository } from "./dogs.repository";
import { DogsFilters } from './dogs.filters';

@Injectable()
export class DogsService {

    constructor(private readonly dogsRepository: DogsRepository){ }

    async getAll(filters : DogsFilters): Promise<Dogs[]> {

        const dogs = await this.dogsRepository.getAll(filters);

        return dogs;
    }
}
