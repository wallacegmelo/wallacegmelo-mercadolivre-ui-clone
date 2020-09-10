import React from 'react';

import { Section } from './styles';

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">
            Receba o produto que você está esperando ou devolvemos o seu dinheito
          </p>
        </span>

        <span>
          <p className="title">Garantia com o vendedor</p>
          <p className="description">
            Sem garantia
          </p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  );
}

export default WarrantySection;