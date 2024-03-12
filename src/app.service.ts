import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(serviceA: string , serviceB: string): string {
    return `Service A: ${serviceA} Service B: ${serviceB}`;
  }
}
