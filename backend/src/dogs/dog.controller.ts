import { Controller,Get, Post, Query, ParseIntPipe, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAllDogsQuery } from './querys/getAllDogs.query';
import { GetByIdDogQuery } from './querys/getByIdDog.query';
import { DogFilters } from './dog.filters';
import { NewDogCommand } from './commands/newDog.command';
import { DeleteDogCommand } from './commands/deleteDog.command';
import { UpdateDogCommand } from './commands/updateDog.command';
import { DogDTO } from './dogDTO';

@Controller('dog')
export class DogController {

    constructor(private readonly queryBus: QueryBus,
                private readonly commandBus: CommandBus) { }

    @Get("ping")
    getPing(): string {
        return "Dogs ping!";
    }

    @Get("getAll")
    async getAll(@Query() filters: DogFilters) {
        
        const query = new GetAllDogsQuery(filters);
        const dogs = await this.queryBus.execute(query);
        return dogs;
    }

    @Get("getById")
    async getById(@Query('id', ParseIntPipe) id: number){
        const query = new GetByIdDogQuery(id);
        const dog = this.queryBus.execute(query);

        return dog;
    }

    @Post("newDog")
    async newDog(@Body() newDogDTO: DogDTO){
        
        const command = new NewDogCommand(newDogDTO);

        const newDog = this.commandBus.execute(command);

        return newDog;
    }

    @Post("updateDog")
    async updateDog(@Body() dogDTO: DogDTO) {
        
        const command = new UpdateDogCommand(dogDTO);

        const updatedDog = this.commandBus.execute(command);

        return updatedDog;
    }

    @Post("deleteDog")
    async deleteDog(@Body('id', ParseIntPipe) id: number) {
        const command = new DeleteDogCommand(id);
        this.commandBus.execute(command);
    }
}
