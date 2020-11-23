import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
 
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory({ forceRefresh: true });

export const baseURL = 'http://192.168.2.43:3000/api/';

export const loginURL ='localhost:4500/authenticate/auth';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>

  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
