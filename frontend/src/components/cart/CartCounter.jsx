import React, { memo, useState } from 'react'

const CartCounter = ({handleCountPlus, handleCountMinus, count, setCount}) => {
   
    return (
        <div className='flex flex-wrap items-center justify-center'>
            <button onClick={handleCountMinus}>-</button>
            <input type="text" name="cart_counter" id="cart_counter" value={count} onChange={(e)=>setCount(e.target.value)} min="0" max="10" className="max-w-20 text-center" />
            <button onClick={handleCountPlus}>+</button>
        </div>
    )
}

export default memo(CartCounter)