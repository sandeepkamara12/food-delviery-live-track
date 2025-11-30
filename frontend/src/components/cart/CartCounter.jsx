import { memo } from 'react';

const CartCounter = ({ count, onPlus, onMinus , setQty}) => {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            <button onClick={onMinus}>-</button>
            <input type="text" name="cart_counter" id="cart_counter" value={count} onChange={(e)=>setQty(parseInt(e.target.value))} min="0" max="10" className="max-w-20 text-center" />
            <button onClick={onPlus}>+</button>
        </div>
    )
}

export default memo(CartCounter)