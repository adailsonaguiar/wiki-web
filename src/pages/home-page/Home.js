import React, { useState, useEffect } from 'react';
import Header from '../../components/header-component/Header';
import firebase from 'firebase';
import { Container, Form, Row, TitleForm } from './styles';
import Load from '../../components/load-component/Load';

const Home = () => {
  const [userId, setUserId] = useState('');
  const [titlePost, setTitlePost] = useState('');
  const [typePost, setTypePost] = useState('');
  const [descriptionPost, setDescriptionPost] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUserId(JSON.parse(localStorage.getItem('user')).user.uid);
    }
  }, []);

  const cleanForm = () => {
    setTitlePost('');
    setDescriptionPost('');
    setTypePost('');
  };

  const validateForm = () => {
    if (
      titlePost.length > 0 &&
      descriptionPost.length > 0 &&
      typePost.length > 0
    ) {
      return true;
    }
    return false;
  };

  const saveActivity = async () => {
    if (validateForm()) {
      setLoading(true);
      const timestamp = new Date().getTime();
      const body = { titlePost, typePost, descriptionPost };
      await firebase
        .database()
        .ref(`activities/${userId}/${timestamp}`)
        .set(body);
      setLoading(false);
      cleanForm();
    } else {
      alert('Preencha os campos corretamente!');
    }
  };

  return (
    <Container>
      <Header />
      <Form>
        <Row>
          <TitleForm>Novo Post</TitleForm>
        </Row>
        <Row>
          <select value={typePost} onChange={e => setTypePost(e.target.value)}>
            <option>Selecione o tipo de atividade</option>
            <option>Páginas</option>
            <option>Documentos</option>
            <option>Tutoriais</option>
            <option>Reuniões</option>
          </select>
          <input
            placeholder='Digite o título de sua atividade'
            value={titlePost}
            onChange={e => setTitlePost(e.target.value)}
          />
        </Row>
        <Row>
          <textarea
            placeholder='Digite o conteúdo da sua atividade'
            value={descriptionPost}
            onChange={e => setDescriptionPost(e.target.value)}
          />
        </Row>
        <Row className='center'>
          {loading ? (
            <Load />
          ) : (
            <button onClick={() => saveActivity()}>SALVAR</button>
          )}
        </Row>
      </Form>
      ><h1>Home Works</h1>
    </Container>
  );
};

export default Home;
