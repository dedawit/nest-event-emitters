import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserCreatedListener } from './listeners/user-created.listener';
import { OrderListener } from './listeners/order.listener';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      delimiter: '.',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserCreatedListener, OrderListener],
})
export class AppModule {}
