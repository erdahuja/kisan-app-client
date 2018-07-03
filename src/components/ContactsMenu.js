import React from 'react'
import { Link } from 'react-router-dom';

const ContactsMenu = ({ contacts }) => (
      <div className='ui secondary vertical menu'>
      <div className='header item'>
        Contacts List
      </div>
      {
        contacts.map((contact) => (
          <div className="item" key={contact.id}>
            <Link
              to={`/contacts/${contact.id}`}
              key={contact.id}
            >
            <div className="middle aligned content">
              <div className="header">
          {contact.id + ') '}
                <i className="envelope icon"></i>
                {contact.name}
              </div>
            </div>
            </Link>
          </div>
        ))
      }
    </div>
);

export default ContactsMenu;
