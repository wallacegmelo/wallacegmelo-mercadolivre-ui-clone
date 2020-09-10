import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispacthTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta branca de marca desconhecida</h1>
        <HeartIcon />
      </Row>

      <DispacthTag>Enviando normalmente</DispacthTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>
          <a href="#" className="more">Ver mais opções</a>
        </div>
      </MethodCard>

      <Actions>
        <Button variant="filled">Comprar agora</Button>
        <Button variant="outlined">Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra garantida, receba o produto que está esperando ou devolvemos
            o dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
}

export default ProductAction;