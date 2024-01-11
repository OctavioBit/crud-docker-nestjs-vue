import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello";
  }

  getCoquits(): string {
    return "Hola Sr. Coquits"
  }
}
