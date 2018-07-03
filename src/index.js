import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./semantic/semantic.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import contactsApp from './redux/reducers';

const store = createStore(contactsApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();