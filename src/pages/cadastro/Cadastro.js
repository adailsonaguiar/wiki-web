import React from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';

const Cadastro = () => {
  return (
    <Container>
      <img src={logo} alt='Logo' />
      <h2>Cadastre-se na plataforma</h2>
      <Form>
        <input class='input' placeholder='Digite um e-mail' />
        <input class='input' type='password' placeholder='Informe uma senha' />
        <i>*Esse usuário já existe.</i>
        <button title='Cadastrar'>CADASTRAR</button>
        <a href='/'>Voltar ao login</a>
      </Form>
    </Container>
  );
};

export default Cadastro;
