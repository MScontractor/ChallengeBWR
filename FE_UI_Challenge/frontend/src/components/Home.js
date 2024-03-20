import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import { Box, Typography, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import user from '../icons/user.jpg';
import wine from '../icons/Wine-glass.png';
import beer from '../icons/Beer.png';
import { styled } from '@mui/material/styles';

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
});

const Content = styled(Box)({
  display: 'flex',
  height: 'calc(100% - 110px)',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 24,
});

const Header = styled(Box)({
  display: 'flex',
  width: 'calc(100% - 48px)',
  justifyContent: 'space-between',
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

const Avatar = styled('img')({
  height: 40,
  width: 40,
  borderRadius: 20,
})

const ProductsList = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexGrow: 1,
  alignContent: 'flex-start',
  overflowX: 'hidden',
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { 
    display: 'none',
  }
})

const Hi = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  color: '#646464',
})

const Welcome = styled(Typography)({
  fontSize: 24,
  fontWeight: 700,
  color: '#323232',
})

const SearchInput = styled(TextField)({
  margin: '24px 0',
  borderRadius: 12,
  background: 'white',
  fontSize: 14,
  padding: '0 8px',
})

const LebelGroup = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})

const Categories = styled(Box)({
  display: 'flex',
  alignContent: 'center',
  width: '100%',
  paddingTop: 8,
  marginBottom: 16,
})

const CategoryButton = styled(Button)({
  height: 48,
  background: 'white',
  borderRadius: 12,
  weight: 500,
  size: 16,
  marginRight: 16,
  color: 'black',
})

const Label = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  color: '#323232',
})

const SeeAll = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  color: '#646464',
})

const ImageContainer = styled(Box)({
  height: 20,
  width: 20,
  marginRight: 4,
})

const Image = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

const Home = () => {
  const { products } = useProducts();

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
          <Menu><MenuIcon /></Menu>
          <Avatar src={user} />
        </Header>
        <Content>
          <Hi>Hi Mr. Michael,</Hi>
          <Welcome>Welcome Back!</Welcome>
          <SearchInput variant='standard' placeholder='Search burger, pizza, drink or ect...' 
            InputProps={{
              startAdornment: (<SearchIcon />),
              disableUnderline: true,
              style: {
                height: 48,
              }
            }} />
          <LebelGroup>
            <Label>Drink Category</Label>
            <SeeAll>See All</SeeAll>
          </LebelGroup>
          <Categories>
            <CategoryButton>All</CategoryButton>
            <CategoryButton>
              <ImageContainer>
                <Image src={beer}/>
              </ImageContainer>
              Beer
            </CategoryButton>
            <CategoryButton>
              <ImageContainer>
                <Image src={wine}/>
              </ImageContainer>
              Wine
            </CategoryButton>
          </Categories>
          <LebelGroup>
            <Label>Populer</Label>
            <SeeAll>See All</SeeAll>
          </LebelGroup>
          <ProductsList>
            {products.map((product, i) => (
              <Product key={product.id + i} product={{...product}} />
            ))}
          </ProductsList>
        </Content>
      </Container>
    </Root>
  );
};

export default Home;