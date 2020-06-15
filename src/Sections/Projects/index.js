import React from 'react';

import Carousel from 'react-elastic-carousel';

import Card from '../../Components/Card';
import Title from '../../Components/Title';

import { Container, CrookedBG, Slider } from './styles';

const Projects = () => {
  const screenWidth = window.innerWidth;

  return (
    <>
      <CrookedBG />
      <Container>
        <Title>Alguns dos Projetos que participei</Title>
        <Slider>
          <Carousel
            itemsToShow={screenWidth > 600 ? 3 : 1}
            itemsToScroll={1}
            itemPadding={[40, 10, 0, 10]}
            enableSwipe
            enableMouseSwipe
            showArrows={false}
            enableAutoPlay
            autoPlaySpeed={4000}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </Slider>
      </Container>
    </>
  );
};

export default Projects;
