import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)({
  height: 195,
  width: 155,
  borderRadius: '12px 32px 12px 12px',
  background: 'white',
  margin: '16px 16px 0 0',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Brand = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: 'black',
  margin: '8px 0 16px 0',
})

const ImageContainer = styled(Box)({
  height: 122,
  width: 122,
})

const Image = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

const Product = ({ product }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const to = `/${product.id}-${product.brand.replace(/\s+/g, '-').toLowerCase()}`;
    navigate(to);
  }

  return (
    <Container onClick={handleClick}>
      <Brand>{product.brand}</Brand>
      <ImageContainer>
        <Image src={product.image} />
      </ImageContainer>
    </Container>
  );
};

export default Product;