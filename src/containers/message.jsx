/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>{this.props.message.author}</h3><h5>{this.props.message.created_at}</h5>
          <p>{this.props.message.content}</p>
        </div>
      </div>
    );
  }
}

export default Message;
