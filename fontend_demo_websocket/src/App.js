import React, { Component } from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';

import { createConsumer } from "@rails/actioncable"

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.cable = createConsumer('ws://localhost:28080/cable')
  }

  componentDidMount() {
    this.fetchMessages()
    this.createSubscription()
  }

  fetchMessages = () => {
    fetch('http://localhost:3000/api/v1/messages')
      .then(res => res.json())
      .then(messages => this.setState({ messages: messages }))
  }

  createSubscription = () => {
    this.subscriptions = this.cable.subscriptions.create(
      { channel: 'MessagesChannel' },
      {
        connected: () => {
          console.log("client connected");
        },
        received: message => this.handleReceivedMessages(message),
      }
    )
  }

  mapMessages = () => {
    return this.state.messages.map((message, i) =>
      <li key={i}>{message.content}</li>)
  }

  handleReceivedMessages = message => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  handleSubmitMessage = e => {
    e.preventDefault();
    this.subscriptions.send(
      {content: e.target.message.value}
    )
    e.target.reset()
  }

  render() {
    return (
      <div className='App'>
        <ActionCableProvider cable={this.cable}/>
        <h2>Messages</h2>
        <ul>{this.mapMessages()}</ul>
        <form onSubmit={this.handleSubmitMessage}>
          <input name='message' type='text' value={this.state.value} />
          <input type='submit' value='Send message' />
        </form>
      </div>
    );
  }
}

export default App;