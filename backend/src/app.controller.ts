import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('hello')
  getHello(): string {
    return "Hello universe!";
  }
}
