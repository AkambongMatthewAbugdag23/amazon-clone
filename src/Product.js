import React from 'react'
import './product.css'

function Product() {
  return (
      <div className="product1">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>12.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
              </div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
                <button>Add to Basket</button>
            </div>
        
    </div>
  )
}

export default Product