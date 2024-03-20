import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import { styled } from '@mui/material/styles';
import { Box, Typography, Badge, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate} from "react-router-dom";

const Root = styled(Box)({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FF9F24',
});

const Container = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#FAFAFA',
  alignItems: 'center',
});

const Content = styled(Box)({
  display: 'flex',
  height: 'calc(100% - 110px)',
  width: 'calc(100% - 48px)',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: 24,
  background: 'white',
  borderRadius: '48px 48px 0 0',
});

const Header = styled(Box)({
  display: 'flex',
  width: 'calc(100% - 48px)', 
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 24px 0 24px',
});

const Menu = styled(Box)({
  height: 40,
  width: 40,
  background: 'white',
  borderRadius: 12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const BrandGroup = styled(Box)({
  borderRadius: 12,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})

const Detail = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  color: 'black',
})

const Brand = styled(Typography)({
  fontSize: 24,
  fontWeight: 700,
  color: 'black',
})

const Price = styled(Typography)({
  fontSize: 24,
  fontWeight: 700,
  color: '#FF9F24',
})

const Availability = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  color: '#969696',
})

const Label = styled(Typography)({
  fontSize: 16,
  fontWeight: 700,
  color: 'black',
  margin: '8px 0'
})

const Description = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  color: '#646464',
  maxHeight: 150,
  overflowY: 'scroll'
})

const Image = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  marginTop: 16,
})

const SkuButton = styled(Button)({
  height: 32,
  fontSize: 14,
  color: '#969696',
  border: '1px solid #969696',
  borderRadius: 16,
  margin: '0 16px 8px 0',
})

const CartContainer = styled(Box)({
  display: 'flex',
  marginTop: 34,
})

const Cart = styled(Box)({
  height: 54,
  width: 54,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #FF9F24',
  color: '#FF9F24',
  borderRadius: 12,
})

const AddButton = styled(Button)({
  height: 54,
  fontSize: 16,
  width: 248,
  color: 'white',
  background: '#FF9F24',
  borderRadius: 12,
  marginLeft: 16,
  '&:hover': {
    background: '#FF9F24',
  },
  '&:disabled': {
    border: '1px solid #969696',
    background: 'white',
    color: '#969696',
  }
})

const ProductDetailPage = ({ cart, addToCart }) => {
  const { productId } = useParams();
  const { product, setSku, sku, getPriceAndStock, price, stock } = useProduct(productId);
  const navigate = useNavigate();

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleSelectSku = (sku) => {
    setSku(sku);
  };

  const handleAddToCart = () => {
    addToCart(sku, getPriceAndStock)
  }

  return (
    <Root>
      <Container sx={{
        width: {
          xs: 400,
          md: 600,
          lg: 800,
          xl: 1160,
        }
      }}>
        <Header>
          <Menu onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </Menu>
          <Detail>Detail</Detail>
          <Menu>
            <MoreHorizIcon />
          </Menu>
        </Header>
        <Box sx={{
          margin: '24px 0',
          width: {
            xs: 220,
            md: 280,
            lg: 340,
            xl: 420,
          },
          height: {
            xs: 220,
            md: 280,
            lg: 340,
            xl: 420,
          }
        }}>
          <Image src={product.image}/>
        </Box>
        <Content>
          <BrandGroup>
            <Brand>{product.brand}</Brand>
            {price !== 0 && <Price>${price}</Price>}
          </BrandGroup>
          <Availability>Origin: {product.origin} | Stock: {stock}</Availability>
          <Label>Description</Label>
          <Description>{product.information}</Description>
          <Label>Size</Label>
          <div>
            {product.skus.map((skuItem) => (
              <SkuButton key={skuItem.code} sx={{
                color: sku === skuItem.code ? '#FF9F24': '#969696',
                border: sku === skuItem.code ? '1px solid #FF9F24' : '1px solid #969696',
              }} onClick={() => handleSelectSku(skuItem.code)}>{skuItem.name}</SkuButton>
            ))}
          </div>
          <CartContainer>
            <Badge badgeContent={cart.length} color="secondary">
              <Cart>
                <LocalMallIcon />
              </Cart>
            </Badge>
            <AddButton disabled={sku === null || stock === 0} onClick={handleAddToCart}>
              {sku && stock === 0 ? 'Out of stock' : 'Add to cart'}
            </AddButton>
          </CartContainer>
        </Content>
      </Container>
    </Root>
  );
};

export default ProductDetailPage;