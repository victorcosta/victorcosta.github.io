import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../../assets/swipe-down-animation.json';

import logo from '../../assets/logo.svg';
import bg from '../../assets/bg.png';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Container = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const OverLay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.h1`
  width: 340px;
  height: 155px;
  background-image: url(${logo});
  overflow: hidden;
  text-indent: -999px;
  display: flex;
  z-index: 1;
`;

export const SwipeContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

export const SwipeDown = styled(Lottie).attrs({
  options: defaultOptions,
  height: 80,
  width: 80,
})``;
