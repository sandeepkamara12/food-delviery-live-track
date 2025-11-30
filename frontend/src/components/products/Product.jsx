import { useCallback, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import CartCounter from '../cart/CartCounter';
const Product = ({ product }) => {
    const [count, setCount] = useState(0);

    const { addToCart, carts} = useCart();

    const handleCountPlus = useCallback(() => {
        setCount(prev => prev < 10 ? prev + 1 : 10)
    }, [count]);
    const handleCountMinus = useCallback(() => {
        setCount(prev => prev > 0 ? prev - 1 : 0)
    }, [count]);
    const handleResetProductQuantity = useCallback(() => {
        setCount(0);
    });

    const newCartItem = {
        id: product?._id,
        name: product?.name,
        price: product?.price,
        image: product?.image,
        shop: product?.shop,
        quantity: count,
        food_type: product?.food_type
    }
    console.log(carts, 'carts');
    return (
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
                <img className="w-full rounded-xl" src={product?.image} alt="Hero Image" />
            </div>
            <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    {product?.category}, {product?.food_type}, ${product?.price}
                </span>
                <h3 className="capitalize text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {product?.name}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    A software that develops products for software developers and developments.
                </p>
                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    {product?.rating.average}<br />
                    {product?.rating?.count}
                </p>
                <CartCounter handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} count={count} setCount={setCount} />
                <button disabled={count===0} onClick={() => {addToCart(newCartItem); handleResetProductQuantity()}}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product