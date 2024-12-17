import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CrearPerroCommand } from './commands/crearPerroCommand.command';
import { GetPerroQuery } from './querys/getPerroQuery.query';

@Controller('perros')
export class PerrosController {
    constructor(private readonly commandBus: CommandBus,
                private readonly queryBus: QueryBus) { }

    @Post('crearPerro')
    async crearPerro(@Body() body: { nombre:string; edad: number }) {        
        const { nombre, edad } = body;
        const command = new CrearPerroCommand(nombre, edad);
        const perro = await this.commandBus.execute(command);
        return perro;
    }

    @Get(':id')
    async getPerro(@Param('id') id: number) {
        const query = new GetPerroQuery(id);
        const post = await this.queryBus.execute(query);
        return post;
    }
}