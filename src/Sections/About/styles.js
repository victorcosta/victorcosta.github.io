import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 35px auto 0;
`;
export const Content = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
  }
  div {
    width: 380px;
    p {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    div {
      padding: 20px;
    }
  }
`;
