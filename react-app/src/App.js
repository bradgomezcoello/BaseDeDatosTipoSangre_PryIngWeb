import { useAuth0 } from '@auth0/auth0-react';

import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidates from './components/DCandidates';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container minWidth="lg">
          {isAuthenticated ? (
            <>
              <Profile />
              <DCandidates />
              <LogoutButton />
            </>
          ) : (
            <div align="center">
              <h1>
                APP Ingeniería Web
                <h3>Base de Datos Tipo de Sangre</h3>
              </h1>
              <img src={logo} className="App-logo" alt="logo" />
              <h2>
              <LoginButton />
              </h2>
            </div>            
          )}
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
