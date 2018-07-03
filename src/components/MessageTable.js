import React from "react";

const MessageTable = ({ messages }) => {
  return (
    <table className="ui very basic collapsing celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Message</th>
          <th>Phone</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(msg => (
          <tr key={msg.to}>
            <td>
              <h4 className="ui image header">
                <div className="content">{msg.name}</div>
              </h4>
            </td>
            <td>
              <div className="content">{msg.text}</div>
            </td>
            <td>
              <div className="content">{msg.to}</div>
            </td>
            <td>
              <div className="content">{new Date(msg.date).toString()}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MessageTable;
