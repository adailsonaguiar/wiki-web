import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
// eslint-disable-next-line no-unused-vars
import firebaseConfig from './config/firebase-config';

function App() {

  return (
    <div className='App'>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
