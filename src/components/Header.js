import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
      <div className="ui pointing menu">
        <Link className="item" to="/contacts">
          Contacts
        </Link>
        <Link className="item" to="/messages">
          Messages
        </Link>
      </div>
);

export default Header;

