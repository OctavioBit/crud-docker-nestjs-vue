import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerrosModule } from './perros/perros.module';

@Module({
  imports: [PerrosModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
