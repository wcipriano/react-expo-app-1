import React from 'react';
import { Container, Image, Title, Foundation } from "./styles";
import unitedImg from '../../../assets/united.png';

export function Card() {
  return (
    <Container animation="rubberBand" duration={2000}>
      <Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        duration={500}
        direction="alternate"
        iterationCount="infinite"
      ></Image>
      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
      <Foundation>Wagner</Foundation>
    </Container>
  );
}
