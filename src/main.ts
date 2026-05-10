import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000);

  const appService = app.get(AppService);

  // Mock: user.created
  await appService.createUser(1, 'mock.user@example.com');

  // Mock: order.created  →  wildcard listener fires after 10s
  await appService.createOrder(101, 1, 99.99);

  // Mock: order.delivered  →  wildcard listener fires after 10s
  await appService.deliverOrder(101);
}
bootstrap();
