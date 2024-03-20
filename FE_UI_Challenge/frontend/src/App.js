import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetailPage from './components/ProductDetailPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useCart from './hooks/useCart';

const theme = createTheme({
  typography: {
    fontFamily: [
      'DM Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    button: {
      textTransform: 'none'
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1025,
        xl: 1536,
      },
    },
  }
});

const App = () => {
  const { cart, addToCart } = useCart();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<ProductDetailPage cart={cart} addToCart={addToCart}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;