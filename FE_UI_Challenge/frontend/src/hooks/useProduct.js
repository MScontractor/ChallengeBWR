import React, { useState, useEffect } from 'react';
import { getRequest } from './helpers';

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [sku, setSku] = useState(null);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handlePriceAndStockData = (data) => {
    setPrice(data.price)
    setStock(data.stock)
  };

  const getProduct = () =>
    getRequest(`products/${productId}`, setProduct);
  
  const getPriceAndStock = () =>
    sku && getRequest(`stock-price/${sku}`, handlePriceAndStockData);

  useEffect(() => {
    getProduct();
    getPriceAndStock();

    const timer = setInterval(() => {
      getPriceAndStock();
    }, 5000);

    return () => clearInterval(timer);
  }, [sku]);


  return {
    product,
    sku,
    setSku,
    getPriceAndStock,
    price,
    stock,
  };
};

export default useProduct;