import React, { useState } from 'react';
import { Container, Form, Load } from './styles';
import logo from '../../assets/logo.svg';
import load from '../../assets/load.svg';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const authenticate = (email, password) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        setLoading(false);
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/home');
      })
      .catch(erro => {
        console.log(erro);
        setLoading(false);
      });
  };

  return (
    <Container>
      <img src={logo} alt='Logo' />
      {loading ? (
        <Load src={load} alt='Loading' />
      ) : (
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
          <a href='/register'>Você é novo por aqui?</a>
        </Form>
      )}
    </Container>
  );
};

export default Login;
