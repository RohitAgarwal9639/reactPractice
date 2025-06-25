import React from 'react'

const ProductInfo = () => {
    const product={
        name: "Laptop",
        price: 1000,
        description: "A high performance laptop",
        availability: "in-stock",
    };
  return (
    <div>
      <p>name:{product.name}</p>
      <p>price:{product.price}</p>
      <p>description:{product.description}</p>
      <p>availability:{product.availability}</p>
    </div>
  )
}

export default ProductInfo
