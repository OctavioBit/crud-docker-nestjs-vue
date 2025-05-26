import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';


@Module({
  imports: [ DogsModule,CqrsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
