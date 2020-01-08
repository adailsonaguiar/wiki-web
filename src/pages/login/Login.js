import React, { useState } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';
import firebase from 'firebase';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const test = () => {
    localStorage.setItem(user, 'teste');
  };
  const authenticate = async (email, password) => {
     try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          localStorage.setItem('user', user);
        });
    } catch (erro) {
      console.log(erro.toString(erro));
    }
  };

  return (
    <Container>
      <img src={logo} alt='Logo' />
      <Form>
        <input
          placeholder='Digite seu e-mail'
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          type='password'
          placeholder='Informe sua senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <i>*Esse usuário já existe.</i>
        <button
          title='Cadastrar'
          type='button'
          onClick={() => {
            authenticate(user, password);
          }}
        >
          ENTRAR
        </button>
        <a href='/cadastro'>Você é novo por aqui?</a>
      </Form>
    </Container>
  );
};

export default Login;
