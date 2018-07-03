import React, { Component } from "react";
import * as client from "./Client";
import Loader from "./Loader";
import MessageTable from "./MessageTable";
export default class Messages extends Component {
  state = {
    fetched: false,
    messages: []
  };
  componentDidMount() {
    this.getMessages();
  }

  getMessages = async () => {
    const messages = await client.getMessages();
    this.setState({
      messages,
      fetched: true
    });
  };

  render() {
    const messages = this.state.messages;
    if (!this.state.fetched) return <Loader />;
    return <MessageTable messages={messages} />;
  }
}
