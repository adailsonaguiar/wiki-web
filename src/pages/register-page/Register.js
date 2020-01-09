import React, { useState } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';
import firebase from 'firebase';
import Load from '../../components/load-component/Load';
import { useHistory } from 'react-router-dom';

const Cadastro = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [erroMessage, setErroMessage] = useState('');
  const history = useHistory();

  const register = (email, password) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        setLoading(false);
        alert('Cadastrado com sucesso! Prossiga para fazer login.');
        history.push('/');
      })
      .catch(erro => {
        console.log(erro);
        if (erro.code === 'auth/email-already-in-use') {
          setErroMessage('*Esse email já está cadastrado!');
        }
        if (erro.code === 'auth/invalid-email') {
          setErroMessage('*Digite um e-mail válido!');
        }
        setLoading(false);
      });
  };
  return (
    <Container>
      <img src={logo} alt='Logo' />
      <h2>Cadastre-se na plataforma</h2>
      <Form>
        <input
          placeholder='Digite um e-mail'
          value={user}
          onChange={e => {
            setUser(e.target.value);
            setErroMessage('');
          }}
        />
        <input
          type='password'
          placeholder='Informe uma senha'
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
              register(user, password);
            }}
          >
            CADASTRAR
          </button>
        )}
        <a href='/'>Voltar ao login</a>
      </Form>
    </Container>
  );
};

export default Cadastro;
