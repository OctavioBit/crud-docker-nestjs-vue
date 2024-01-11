import { Injectable } from '@nestjs/common';
import { CreatePerroDto } from './dto/create-perro.dto';
import { UpdatePerroDto } from './dto/update-perro.dto';

@Injectable()
export class PerrosService {
  create(createPerroDto: CreatePerroDto) {
    return 'This action adds a new perro';
  }

  findAll() {
    return `This action returns all perros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perro`;
  }

  update(id: number, updatePerroDto: UpdatePerroDto) {
    return `This action updates a #${id} perro`;
  }

  remove(id: number) {
    return `This action removes a #${id} perro`;
  }
}
