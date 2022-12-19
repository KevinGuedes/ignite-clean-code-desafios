export class Order {
  customerDocument: string
  total: number

  constructor(total: number, customerDocument: string) {
    this.customerDocument = customerDocument
    this.total = total
  }
}
