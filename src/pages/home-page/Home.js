import React from 'react';
import Header from '../../components/header-component/Header';
import firebase from 'firebase';
import {
  Container,
  Form,
  Row,
  TitleForm,
  ContainerActivities,
  Activity,
  TitlePost,
  TypePost,
  DescriptionPost
} from './styles';
import Load from '../../components/load-component/Load';

// import { Container } from './styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titlePost: '',
      typePost: '',
      descriptionPost: '',
      loading: false,
      activities: [],
      pages: 0,
      documents: 0,
      tutorials: 0,
      meetings: 0
    };
  }

  componentDidMount() {
    this.getActivities();
  }

  cleanForm = () => {
    this.setState({
      titlePost: '',
      typePost: '',
      descriptionPost: '',
      loading: false
    });
  };

  validateForm = () => {
    if (
      this.state.titlePost.length > 0 &&
      this.state.descriptionPost.length > 0 &&
      this.state.typePost.length > 0
    ) {
      return true;
    }
    return false;
  };

  saveActivity = async () => {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    if (this.validateForm()) {
      this.setState({ loading: true });
      const body = {
        titlePost: this.state.titlePost,
        typePost: this.state.typePost,
        descriptionPost: this.state.descriptionPost
      };
      await firebase
        .database()
        .ref(`activities/${uid}`)
        .push(body);
      this.setState({ loading: false });
      this.cleanForm();
      this.getActivities();
    } else {
      alert('Preencha os campos corretamente!');
    }
  };

  countTypesPosts = () => {
    this.setState({ pages: 0, documents: 0, tutorials: 0, meetings: 0 });
    this.state.activities.map(activity => {
      if (activity[1].typePost === 'Documentos') {
        this.setState({ documents: this.state.documents + 1 });
      }
      if (activity[1].typePost === 'Páginas') {
        this.setState({ pages: this.state.pages + 1 });
      }
      if (activity[1].typePost === 'Tutoriais') {
        this.setState({ tutorials: this.state.tutorials + 1 });
      }
      return null;
    });
  };

  getActivities = async () => {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    const res = firebase.database().ref('activities/' + uid);

    await res.on('value', snapshot => {
      const posts = snapshot.val();

      if (posts) {
        var result = Object.keys(posts).map(key => {
          return [key, posts[key]];
        });
        this.setState({ activities: result });
      }
      this.countTypesPosts();
    });
  };

  render() {
    return (
      <Container>
        <Header
          pages={this.state.pages}
          tutorials={this.state.tutorials}
          documents={this.state.documents}
          meetings={this.state.meetings}
        />
        <Form>
          <Row>
            <TitleForm>Novo Post</TitleForm>
          </Row>
          <Row>
            <select
              value={this.state.typePost}
              onChange={e => this.setState({ typePost: e.target.value })}
            >
              <option>Selecione o tipo de atividade</option>
              <option>Páginas</option>
              <option>Documentos</option>
              <option>Tutoriais</option>
              <option>Reuniões</option>
            </select>
            <input
              placeholder='Digite o título de sua atividade'
              value={this.state.titlePost}
              onChange={e => this.setState({ titlePost: e.target.value })}
            />
          </Row>
          <Row>
            <textarea
              placeholder='Digite o conteúdo da sua atividade'
              value={this.state.descriptionPost}
              onChange={e => this.setState({ descriptionPost: e.target.value })}
            />
          </Row>
          <Row className='center'>
            {this.state.loading ? (
              <Load />
            ) : (
              <button onClick={() => this.saveActivity()}>SALVAR</button>
            )}
          </Row>
        </Form>
        <ContainerActivities>
          {this.state.activities.map(activity => (
            <Activity key={activity[0]}>
              <div className='row'>
                <TitlePost>{activity[1].titlePost}</TitlePost>
                <TypePost>{activity[1].typePost}</TypePost>
              </div>
              <DescriptionPost>{activity[1].descriptionPost}</DescriptionPost>
              <div className='center'>
                <button type='button'>Editar</button>
                <button type='button'>Deletar</button>
              </div>
            </Activity>
          ))}
        </ContainerActivities>
      </Container>
    );
  }
}
