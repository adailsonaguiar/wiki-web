import React, { useState } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import Load from '../../components/load-component/Load';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [erroMessage, setErroMessage] = useState('');

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
        if (erro.code === 'auth/wrong-password') {
          setErroMessage('*Senha incorreta!');
        }
        if (erro.code === 'auth/invalid-email') {
          setErroMessage('*E-mail inválido!');
        }
        if (erro.code === 'auth/user-not-found') {
          setErroMessage('*E-mail não cadastrado!');
        }
      });
  };

  return (
    <Container>
      <img src={logo} alt='Logo' />
      <Form>
        <input
          placeholder='Digite seu e-mail'
          value={user}
          onChange={e => {
            setUser(e.target.value);
            setErroMessage('');
          }}
        />
        <input
          type='password'
          placeholder='Informe sua senha'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            setErroMessage('');
          }}
        />
        <i>{erroMessage}</i>
        {loading ? (
          <Load />
        ) : (
          <button
            title='Cadastrar'
            type='button'
            onClick={() => {
              authenticate(user, password);
            }}
          >
            ENTRAR
          </button>
        )}
        <a href='/register'>Você é novo por aqui?</a>
      </Form>
    </Container>
  );
};

export default Login;
