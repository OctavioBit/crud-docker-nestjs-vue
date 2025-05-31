import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DogModule } from './dogs/dog.module';

@Module({
  imports: [ DogModule],
  controllers: [AppController]  
})

export class AppModule {}
