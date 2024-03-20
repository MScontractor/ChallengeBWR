const express = require('express');
const cors = require("cors");
const stockPriceData = require('./stock-price.js');
const products = require('./products.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/stock-price/:code', (req, res) => {
  const { code } = req.params;
  const stockPrice = stockPriceData[code];
  if (!stockPrice) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({
    stock: stockPrice.stock,
    price: (stockPrice.price / 100).toFixed(2),
  });
});

app.put('/api/update-stock/:sku', (req, res) => {
    const { sku } = req.params;
    console.log(req.body);
    const { quantity } = req.body;
    if (stockPriceData[sku]) {
      stockPriceData[sku].stock -= quantity;
      res.json({ message: 'Stock updated successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  });

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  });

app.get('/api/products', (req, res) => {
    res.json(products);
  });

app.listen(3001, () => {
  console.log('Server running on port 3001');
});