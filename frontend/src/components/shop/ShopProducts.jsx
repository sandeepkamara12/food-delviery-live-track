import React, { useCallback, useEffect, useState } from 'react'
import Product from '../products/Product'
import { useParams } from 'react-router-dom';
import { useShop } from '../../hooks/useShop';

const ShopProducts = () => {
  const { shopId } = useParams();
  const [products, setProducts] = useState([]);
  const { getShopItems } = useShop();

  const getProducts = useCallback(async () => {
    const products = await getShopItems(shopId);
    setProducts(products?.items);
  }, []);

  useEffect(() => {
    getProducts();
  }, [shopId]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {
          products?.length > 0 && products?.map(product => {
            return (
              <Product shopId={shopId} product={product} key={product?._id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ShopProducts