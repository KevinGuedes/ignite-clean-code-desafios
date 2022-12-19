import { SubmitOrder } from '../use-cases/submit-order'
import { PostgresOrdersRepository } from './postgres/postgres-orders-repository'

export interface Respository {}

const submitOrder = new SubmitOrder(new PostgresOrdersRepository())
