import React from 'react';

import { Container, Logo, OverLay, SwipeContainer, SwipeDown } from './styles';

function Header() {
  return (
    <Container>
      <OverLay />
      <Logo> Victor Costa </Logo>
      <SwipeContainer>
        <SwipeDown />
      </SwipeContainer>
    </Container>
  );
}

export default Header;
