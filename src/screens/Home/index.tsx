import React from "react";
import {View, Text} from 'react-native';
import { Container, Header, Title, Content} from "./styles";
import coverImg from './../../../assets/cover.png';
import { Input } from "../../components/inputs/index";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="Pesquisar..."></Input>
      </Header>
        {/* <Title>Wagner</Title> */}
      <Content>
        <Card></Card>
      </Content>
    </Container>
  )
}
