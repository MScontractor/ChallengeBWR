import React, { useState } from 'react';
import useUpdateStock from './useUpdateStock';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const { updateStock } = useUpdateStock();
  
  const handleAddToCart = (sku, onAdd) => {
    setCart([...cart, sku]);
    updateStock(sku, 1, onAdd)
  }

  return {
    cart,
    addToCart: handleAddToCart,
  };
};

export default useCart;
