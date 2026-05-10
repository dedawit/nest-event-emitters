import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EVENTS } from '../constants';
import { UserCreatedEvent } from '../events/user-created.event';

@Injectable()
export class UserCreatedListener {
  @OnEvent(EVENTS.USER_CREATED)
  handleUserCreatedEvent(event: UserCreatedEvent) {
    // log it
    console.log(`User created event received: ${JSON.stringify(event)}`);
    console.log(
      `[Event Name: ${EVENTS.USER_CREATED}] User created with ID: ${event.userId} and Email: ${event.email}`,
    );
  }
}
