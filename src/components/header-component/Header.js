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

const Header = ({ pages, tutorials, documents, meetings }) => {
  const [user, setUser] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      const userLocal = JSON.parse(localStorage.getItem('user')).email;
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
        <Notification className='notification'>
          <div>{pages}</div>
          <p>Páginas</p>
        </Notification>
        <Notification className='notification'>
          <div>{documents}</div>
          <p>Documentos</p>
        </Notification>
        <Notification className='notification'>
          <div>{tutorials}</div>
          <p>Tutoriais</p>
        </Notification>
        <Notification className='notification'>
          <div>{meetings}</div>
          <p>Reuniões</p>
        </Notification>
      </DivCent>
      <DivRight>
        <User className='user'>{user}</User>
        <p onClick={() => logOut()}>Sair</p>
      </DivRight>
    </Container>
  );
};

export default Header;
