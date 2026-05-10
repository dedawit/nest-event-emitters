import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EVENTS } from './constants';
import { UserCreatedEvent } from './events/user-created.event';

@Injectable()
export class AppService {
  constructor(private eventEmitter: EventEmitter2) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(userId: number, email: string) {
    console.log(`--- Mocking User Creation for ID: ${userId} ---`);
    const event = new UserCreatedEvent(userId, email);
    this.eventEmitter.emit(EVENTS.USER_CREATED, event);
  }
}
