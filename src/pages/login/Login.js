import React from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';

const Login = () => {
  return (
    <Container>
      <img src={logo} alt='Logo' />
      <Form>
        <input class='input' placeholder='Digite seu e-mail' />
        <input class='input' type='password' placeholder='Informe sua senha' />
        <i>*Esse usuário já existe.</i>
        <button title='Cadastrar'>ENTRAR</button>
        <a href='/cadastro'>Você é novo por aqui?</a>
      </Form>
    </Container>
  );
};

export default Login;
