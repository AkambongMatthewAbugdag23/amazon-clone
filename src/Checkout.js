import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
      <div className="checkout">
          <div className="checkout__left">
              <img className="checkout_ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  alt=""
              />
              <div className="">
                  <h2 className="checkout_title">Your Shopping Basket</h2>
                  {/*Using React components fromn the pa rent */}
                  {/* BasketItem */}
                  {/* BasketItem */}
                  {/* BasketItem */}
                  {/* BasketItem */}
                  {/* BasketItem */}
                  {/* BasketItem */}
              </div>
          </div>
            <div className="checkout__right">
              <Subtotal />
            </div>
    </div>
  )
}

export default Checkout