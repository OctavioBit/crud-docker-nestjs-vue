import { PartialType } from '@nestjs/mapped-types';
import { CreatePerroDto } from './create-perro.dto';

export class UpdatePerroDto extends PartialType(CreatePerroDto) {}
