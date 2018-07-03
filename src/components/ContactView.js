import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ContactsView extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <div className="ui card">
        <div className="image">
          <img src={`https://placeimg.com/200/200/people?${contact.id}`} />
        </div>
        <div className="content">
          <a className="header">{contact.name}</a>
          <div className="meta">
            <span className="email">{contact.email}</span>
          </div>

          <div className="meta">
            <p>{contact.address.street}</p>
            <p>{contact.address.zipcode}</p>
          </div>
          <div className="extra content">
            <Link to={`/message/:${contact.id}`} className="comment">
              <i className="comment icon" /> Send Message {contact.phone}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
