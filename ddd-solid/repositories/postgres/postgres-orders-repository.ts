import { Order } from '../../domain/purchases/order'
import { OrdersRepository } from '../orders-repository'

export class PostgresOrdersRepository implements OrdersRepository {
  async create(order: Order): Promise<void> {
    // Salva order no banco de dados
  }
}
