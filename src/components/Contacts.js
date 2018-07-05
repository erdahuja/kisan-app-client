import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import * as client from './Client';
import ContactView from './ContactView';
import ContactsMenu from './ContactsMenu';
import Loader from './Loader';

class Contacts extends Component {
  state = {
    fetched: false,
    contacts: [],
  };

  componentDidMount() {
    this.getContacts();
  }

  getContacts = async () => {
    const contacts = await client.getContacts();
    this.setState({
        contacts,
        fetched: true,
    })
  };

  render() {
    if (!this.state.fetched) {
      return (
        <Loader />
      );
    } else {
      const matchPath = this.props.match.path;
      return (
        <div className='ui two column divided grid'>
          <div
            className='ui ten wide column'
            style={{ maxWidth: 250 }}
          >
            <ContactsMenu
              contacts={this.state.contacts}
              contactsPathname={matchPath}
            />
          </div>
          <div className='ui ten wide column'>
            <Route
              path={`${matchPath}/:contactId`}
              render={({ match }) => {
                const contact = this.state.contacts.find(
                  (a) => a.id == match.params.contactId
                );
                this.props.setMessageContact(contact);
                return (
                  <ContactView
                    contact={contact}
                    contactsPathname={matchPath}
                  />
                );
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default Contacts;
