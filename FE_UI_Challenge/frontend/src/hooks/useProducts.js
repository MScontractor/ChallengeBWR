import React, { useState, useEffect } from 'react';
import { getRequest } from './helpers';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getRequest('products', setProducts)
  }, []);

  return {
    products,
  };
};

export default useProducts;