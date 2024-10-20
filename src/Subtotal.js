import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
      <div className="subtotal">
          <CurrencyFormat
        renderText={(value) => (
          <>
            <p>  
              Subtotal (0  items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        /*   The number of decimal places */  
        decimalScale={2}
        /* value of the total amount */
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
          />
            <button className="subtotal_button">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal