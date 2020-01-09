import React, { useState, useEffect } from 'react';
import {
  Container,
  Logo,
  DivLeft,
  DivRight,
  DivCent,
  User,
  Notification
} from './styles';
import logo from '../../assets/logo.svg';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const userLocal = JSON.parse(localStorage.getItem('user')).user.email;
      setUser(userLocal);
    }
  }, []);

  const logOut = async () => {
    await firebase.auth().signOut();
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Container>
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
        <User>{user}</User>
        <a onClick={() => logOut()}>Sair</a>
      </DivRight>
    </Container>
  );
};

export default Header;
