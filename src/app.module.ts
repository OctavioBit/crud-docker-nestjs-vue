import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerrosModule } from './perros/perros.module';
import { PeliculasModule } from './peliculas/peliculas.module';

@Module({
  imports: [PerrosModule, PeliculasModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
