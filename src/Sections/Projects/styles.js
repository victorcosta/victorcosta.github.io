import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 980px;
  margin: 150px auto 0;
  z-index: 1;
`;

export const CrookedBG = styled.div`
  position: absolute;
  left: 0;
  height: 650px;
  width: 100%;
  background: #c4c4c4;
  transform: scale(1) rotate(-4deg) translateX(-1px) translateY(61px)
    skewX(-4deg) skewY(0deg);
`;

export const Slider = styled.div`
  display: block;
  position: relative;
  &::after {
    content: '';
    width: 15px;
    height: 360px;
    position: absolute;
    top: 40px;
    left: 10px;
    background: -moz-linear-gradient(
      left,
      rgba(196, 196, 196, 1) 0%,
      rgba(196, 196, 196, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(196, 196, 196, 1) 0%,
      rgba(196, 196, 196, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(196, 196, 196, 1) 0%,
      rgba(196, 196, 196, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  &::before {
    content: '';
    width: 15px;
    height: 360px;
    position: absolute;
    top: 40px;
    right: 10px;
    z-index: 1;
    background: -moz-linear-gradient(
      left,
      rgba(196, 196, 196, 0) 0%,
      rgba(196, 196, 196, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(196, 196, 196, 0) 0%,
      rgba(196, 196, 196, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(196, 196, 196, 0) 0%,
      rgba(196, 196, 196, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
`;
