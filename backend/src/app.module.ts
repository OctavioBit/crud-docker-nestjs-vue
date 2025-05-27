import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { DogModule } from './dogs/dog.module';


@Module({
  imports: [ DogModule,CqrsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
