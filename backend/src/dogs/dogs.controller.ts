import { Controller,Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

    constructor(private readonly dogsService: DogsService) { }

    @Get("ping")
    getPing(): string {
        return "Dogs ping!";
    }

    @Get("getAll")
    async getAll() {
        return await this.dogsService.getAll();
    }

}
