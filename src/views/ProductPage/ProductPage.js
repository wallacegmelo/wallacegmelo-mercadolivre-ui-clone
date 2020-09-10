import React from 'react';

import { Container, Wrapper } from './styles';

import { Footer, Header, Product } from './components';


const ProductPage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ProductPage;