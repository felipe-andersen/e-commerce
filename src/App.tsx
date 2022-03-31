import React from 'react';
import './App.css';
import { HomeTemplate } from './templates/home';
import { Provider } from 'react-redux';
import { store } from './state/components';
import { LoginStyledComponent } from './templates/loginSignin/login/styles';
import { LoginOrganism } from './templates/loginSignin/login';

function App() {
  return (
    <Provider store={store}>
      <LoginOrganism/>
    </Provider>
  )
};

export default App;
