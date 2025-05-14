import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("coco")
  getCoco(): string {
    return this.appService.getCoquits();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
