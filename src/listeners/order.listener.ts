import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EVENTS } from '../constants';
import { OrderCreatedEvent } from '../events/order-created.event';
import { OrderDeliveredEvent } from '../events/order-delivered.event';

@Injectable()
export class OrderListener {
  // Wildcard: catches both order.created and order.delivered
  @OnEvent(EVENTS.ORDER_ALL)
  handleOrderEvent(event: OrderCreatedEvent | OrderDeliveredEvent) {
    // Simulate delayed processing — listener logs after 10 seconds
    setTimeout(() => {
      console.log(
        `[OrderListener] Received an order event (after 10s delay): ${JSON.stringify(event)}`,
      );

      if (event instanceof OrderCreatedEvent) {
        console.log(
          `[Event: ${EVENTS.ORDER_CREATED}] Order #${event.orderId} created by User #${event.userId} — Total: $${event.total}`,
        );
      } else if (event instanceof OrderDeliveredEvent) {
        console.log(
          `[Event: ${EVENTS.ORDER_DELIVERED}] Order #${event.orderId} delivered at ${event.deliveredAt.toISOString()}`,
        );
      }
    }, 10_000); // 10 seconds
  }
}
