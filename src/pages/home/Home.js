import React from 'react';
import {
  Container,
  Header,
  Logo,
  DivLeft,
  DivRight,
  DivCent,
  User,
  Notification
} from './styles';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <Container>
      <Header>
        <DivLeft>
          <Logo src={logo} />
        </DivLeft>
        <DivCent>
          <Notification>
            <div>15</div>
            <p>Páginas</p>
          </Notification>
          <Notification>
            <div>139</div>
            <p>Documentos</p>
          </Notification>
          <Notification>
            <div>71</div>
            <p>Tutoriais</p>
          </Notification>
          <Notification>
            <div>521</div>
            <p>Reuniões</p>
          </Notification>
        </DivCent>
        <DivRight>
          <User>adailsonacj@live.com</User>
          <a href='/'>Sair</a>
        </DivRight>
      </Header>
      <h1>Home Works</h1>
    </Container>
  );
};

export default Home;
