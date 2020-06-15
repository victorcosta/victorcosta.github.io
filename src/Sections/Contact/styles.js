import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 160px auto 140px;
  @media (max-width: 800px) {
    margin: 120px auto 50px;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex: 1;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 60px;
  }
`;
