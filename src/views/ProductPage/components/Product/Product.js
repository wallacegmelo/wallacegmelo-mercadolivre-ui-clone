/* eslint-disable no-unused-expressions */
import React from 'react';

import tshirtImage from 'assets/tshirt.png';

import { Info, ProductAction, SellerInfo, WarrantySection } from './components';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery
} from './styles';

const Product = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};


export default Product;