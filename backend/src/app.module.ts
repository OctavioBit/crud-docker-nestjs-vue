import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerrosModule } from './perros/perros.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { DogsController } from './dogs/dogs.controller';
import { DogsModule } from './dogs/dogs.module';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [PerrosModule, PeliculasModule, DogsModule],
  controllers: [AppController, DogsController],
  providers: [AppService, DogsService],
})

export class AppModule {}
