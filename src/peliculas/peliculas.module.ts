import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPeliculasQueryHandler } from './queryHandlers/getPeliculas.queryHandler';
import { PeliculasController } from './peliculas.controller';
import { PeliculasService } from './peliculas.service';

export const QueryHandlers = [GetPeliculasQueryHandler];

@Module({
  imports: [CqrsModule],
  controllers: [PeliculasController],
  providers: [PeliculasService,    
    ...QueryHandlers]
})

export class PeliculasModule {}
