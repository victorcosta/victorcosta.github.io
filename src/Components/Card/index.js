import React from 'react';

import { Container, ImgWrapper } from './styles';

import bg from '../../assets/bg.png';

const Card = () => {
  return (
    <Container>
      <ImgWrapper>
        <img src={bg} alt="" />
      </ImgWrapper>
      <p>asdknajdnkasd</p>
    </Container>
  );
};

export default Card;
