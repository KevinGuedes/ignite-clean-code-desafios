// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList: Product[] = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [filteredProducts, setfilteredProducts] = useState<Product[]>([])

  function searchProducts(search: string) {
    const productsContainingSearchQuery = productList.filter(product => product.title.includes(search))
    setfilteredProducts(productsContainingSearchQuery)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProducts(e.target.value)} />

      {filteredProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


