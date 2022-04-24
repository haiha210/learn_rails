import React, { Component } from 'react';
import ActionCable, { createConsumer } from "@rails/actioncable"

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
    this.cable.subscriptions.create(
      { channel: 'MessagesChannel' },
      { received: message => this.handleReceivedMessages(message) }
    )
  }

  mapMessages = () => {
    return this.state.messages.map((message, i) =>
      <li key={i}>{message.content}</li>)
  }

  handleReceivedMessages = message => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  handleMessageSubmit = e => {
    e.preventDefault();
    const messageObj = {
      message: {
        content: e.target.message.value
      }
    }
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageObj)
    }
    fetch('http://localhost:3000/messages', fetchObj)
    e.target.reset()
  }

  render() {
    return (
      <div className='App'>
        {/* <ActionCable
          channel={{ channel: 'MessagesChannel' }}
          onReceived={this.handleReceivedMessages}
        /> */}
        <h2>Messages</h2>
        {/* <ul>{this.mapMessages()}</ul> */}
        <form>
          <input name='message' type='text' />
          <input type='submit' value='Send message' />
        </form>
      </div>
    );
  }
}

export default App;