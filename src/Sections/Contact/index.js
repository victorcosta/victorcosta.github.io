import React from 'react';

import { Container, CardsContainer } from './styles';
import Title from '../../Components/Title';
import ContactCard from '../../Components/ContactCard';

const Contact = () => {
  return (
    <Container>
      <Title>Entre em contato</Title>
      <CardsContainer>
        <ContactCard text="victorcostadev@gmail.com" icon="email" />
        <ContactCard text="linkedin.com/in/victorcosta12" icon="linkedin" />
        <ContactCard text="instagram.com/victorcosta12" icon="instagram" />
      </CardsContainer>
    </Container>
  );
};

export default Contact;
