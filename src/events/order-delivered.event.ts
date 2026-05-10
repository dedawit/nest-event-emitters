export class OrderDeliveredEvent {
  constructor(
    public readonly orderId: number,
    public readonly deliveredAt: Date,
  ) {}
}
