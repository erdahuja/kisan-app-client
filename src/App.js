import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Header from './components/Header';
import Contacts from './components/ContactsHOC';
import Message from './components/Message';
import Messages from './components/Messages';

const NoMatch = ({ location }) => (
  <div className='ui inverted red raised very padded text container segment'>
    <strong>Error!</strong> No route found matching:
    <div className='ui inverted black segment'>
      <code>{location.pathname}</code>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className='ui container'>
      <Header />
      <div className='spacer row' />
      <div className='row'>
        <Switch>
          <Route path='/contacts' component={Contacts} />
          <Route path='/message/:contactId' component={Message} />
          <Route path='/messages' component={Messages} />
          <Route exact path='/' render={() => (
            <Redirect
              to='/contacts'
            />
          )} />
  
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
    );
  }
}

export default App;
