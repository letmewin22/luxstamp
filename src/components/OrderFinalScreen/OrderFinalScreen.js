import React from 'react'

export const OrderFinalScreen = ({finalPrice}) => {
  return (
    <div className='order__final-screen'>
      <div className='order__final-price'>
        <p>
          Сума до сплати: <span>{finalPrice} грн</span>
        </p>
      </div>
    </div>
  )
}
