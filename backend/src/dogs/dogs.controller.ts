import { Controller,Get, Post, Query, ParseIntPipe, Body, ParseBoolPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAllDogsQuery } from './querys/getAllDogs.query';
import { GetByIdDogQuery } from './querys/getByIdDog.query';
import { DogsFilters } from './dogs.filters';
import { NewDogCommand } from './commands/newDog.command';

@Controller('dogs')
export class DogsController {

    constructor(private readonly queryBus: QueryBus,
                private readonly commandBus: CommandBus) { }

    @Get("ping")
    getPing(): string {
        return "Dogs ping!";
    }

    @Get("getAll")
    async getAll(@Query() filters: DogsFilters) {
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
    async newDog(@Body() dog: {
                                name: string,
                                sex: string,
                                sterilized: string,
                                birthdate: string
                            }){

        const {name, sex, sterilized, birthdate} = dog;

        const command = new NewDogCommand(name, sex, sterilized=="true",new Date(birthdate));

        const newDog = this.commandBus.execute(command);

        return newDog;
    }


}
