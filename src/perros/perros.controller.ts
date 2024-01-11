import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerrosService } from './perros.service';
import { CreatePerroDto } from './dto/create-perro.dto';
import { UpdatePerroDto } from './dto/update-perro.dto';

@Controller('perros')
export class PerrosController {
  constructor(private readonly perrosService: PerrosService) {}

  @Post()
  create(@Body() createPerroDto: CreatePerroDto) {
    return this.perrosService.create(createPerroDto);
  }

  @Get()
  findAll() {
    return this.perrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerroDto: UpdatePerroDto) {
    return this.perrosService.update(+id, updatePerroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perrosService.remove(+id);
  }
}
