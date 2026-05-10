import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000);

  // Mock user creation AFTER app is fully bootstrapped so @OnEvent listeners are registered
  const appService = app.get(AppService);
  await appService.createUser(1, 'mock.user@example.com');
}
bootstrap();
