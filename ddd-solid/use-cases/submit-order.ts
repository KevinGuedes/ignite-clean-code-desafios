import { Order } from '../domain/purchases/order'
import { OrdersRepository } from '../repositories/orders-repository'

interface SubmitOrderRequest {
  customerDocument: string
  total: number
}

interface SubmitOrderResponse {}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({ total, customerDocument }: SubmitOrderRequest) {
    const order = new Order(total, customerDocument)

    await this.ordersRepository.create(order)
  }
}
