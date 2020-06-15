import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 18px;
  color: #000;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  p {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    p {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 800px) {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 10px 20px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      p {
        margin-bottom: 10px;
      }
    }
  }
`;
