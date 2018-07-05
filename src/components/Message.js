import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { sendSMS } from "./Client";
import ErrorBoundary from './ErrorBoundary';

const Message = ({ contact, history }) => {
  if (Object.keys(contact).length < 1) return <Redirect to="/contacts" />;
  const otp = Math.floor(Math.random() * 900000) + 100000;
  const message = `Your OTP is : ${otp}`;
  return (
    <ErrorBoundary>
      <div className="ui comments">
        <div className="comment">
          <div className="content">
            Send To :{" "}
            <a className="author">
              {contact.name} ({contact.phone})
            </a>
            <div className="actions">
              <a className="reply active">OTP Message</a>
            </div>
            <form className="ui reply form">
              <div className="field">
                <textarea defaultValue={message} />
              </div>
              <div
                className="ui primary submit labeled icon button"
                onClick={async () => {
                  await sendSMS(
                    "Deepak",
                    "919971792703",
                    message,
                    contact.name
                  );
                  history.push("/messages");
                }}
              >
                <i className="icon edit" /> Add Reply
              </div>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => {
  return {
    contact: state.contactTo
  };
};
export default connect(mapStateToProps)(Message);
