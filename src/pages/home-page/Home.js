import React, { useState, useEffect } from 'react';
import Header from '../../components/header-component/Header';
import firebase from 'firebase';
import {
  Container,
  Form,
  Row,
  TitleForm,
  ContainerActivities,
  Activity
} from './styles';
import Load from '../../components/load-component/Load';

const Home = () => {
  const [titlePost, setTitlePost] = useState('');
  const [typePost, setTypePost] = useState('');
  const [descriptionPost, setDescriptionPost] = useState('');
  const [loading, setLoading] = useState(false);
  const [activities, SetActivities] = useState([]);

  useEffect(() => {
    getActivities();
  });

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
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    if (validateForm()) {
      setLoading(true);
      const timestamp = new Date().getTime();
      const body = { titlePost, typePost, descriptionPost };
      await firebase
        .database()
        .ref(`activities/${uid}`)
        .push(body);
      setLoading(false);
      cleanForm();
    } else {
      alert('Preencha os campos corretamente!');
    }
  };

  const getActivities = async () => {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    const res = firebase.database().ref('activities/' + uid);

    await res.once('value').then(snapshot => {
      const aaa = snapshot.val();
      SetActivities(aaa);
      console.log(activities);
     
      console.log(activities);
    });
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
      <ContainerActivities>
        {/*  {activities.map(activity => {
          console.log(activity);
        })} */}
        <Activity>activity</Activity>
      </ContainerActivities>
    </Container>
  );
};

export default Home;
