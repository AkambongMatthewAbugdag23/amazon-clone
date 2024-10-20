import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  
  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        // id, title,image,price, rating are set to what is used in the product.
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


  return (
        <div className="product">
            <div className="product__info">
              <p>{title}</p>
              <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
                <div className="product__rating">
                  {Array(rating)
                      .fill()
                      .map((_, i) => (
                          <p>⭐</p>
                      ))}
                </div>
            </div>
          
            <img className="product__img" src={image}  alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product