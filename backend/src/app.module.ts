import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { PerrosModule } from './perros/perros.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { DogsModule } from './dogs/dogs.module';


@Module({
  imports: [PerrosModule, PeliculasModule, DogsModule,CqrsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
