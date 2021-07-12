/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    console.log(this.props.userColor);
    return (
      <div className="message-style">
        <h3 style={{ color: `${this.props.userColor}` }}>{this.props.message.author}</h3><h5>{this.props.message.created_at}</h5>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userColor: state.userColor
  }
}

export default connect(mapStateToProps, null)(Message);
