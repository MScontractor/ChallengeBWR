import React from 'react';
import { putRequest } from './helpers';

const useUpdateStock = () => {
  const updateStock = (sku, quantity, onAdd) =>
    putRequest(`update-stock/${sku}`, onAdd, JSON.stringify({ quantity }))

  return { updateStock };
};

export default useUpdateStock;