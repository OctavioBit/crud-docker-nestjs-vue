import { Injectable } from '@nestjs/common';
import { PrismaClient, Dogs } from '@prisma/client'; 

const prisma = new PrismaClient();

@Injectable()
export class DogsService {

    async getAll(): Promise<Dogs[]> {

        const dogs = await prisma["dogs"].findMany();

        return dogs;
    }
}
