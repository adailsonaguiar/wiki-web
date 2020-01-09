import React, { useState, useEffect } from 'react';
import Header from '../../components/header-component/Header';
import firebase from 'firebase';
import { Container } from './styles';

const Home = () => {
  const [userId, setUserId] = useState('');
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUserId(JSON.parse(localStorage.getItem('user')).user.uid);
    }
  });

  const saveActivity = () => {
    firebase
      .database()
      .ref('activities/' + userId)
      .set({
        teste: 5,
        oto: 3
      });
  };
  return (
    <Container>
      <Header />
      <h1>Home Works</h1>
      <button onClick={() => saveActivity()}>teste</button>
    </Container>
  );
};

export default Home;
