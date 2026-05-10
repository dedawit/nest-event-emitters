import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EVENTS } from './constants';
import { UserCreatedEvent } from './events/user-created.event';
import { OrderCreatedEvent } from './events/order-created.event';
import { OrderDeliveredEvent } from './events/order-delivered.event';

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

  async createOrder(orderId: number, userId: number, total: number) {
    console.log(`--- Mocking Order Creation: Order #${orderId} ---`);
    const event = new OrderCreatedEvent(orderId, userId, total);
    this.eventEmitter.emit(EVENTS.ORDER_CREATED, event);
  }

  async deliverOrder(orderId: number) {
    console.log(`--- Mocking Order Delivery: Order #${orderId} ---`);
    const event = new OrderDeliveredEvent(orderId, new Date());
    this.eventEmitter.emit(EVENTS.ORDER_DELIVERED, event);
  }
}
