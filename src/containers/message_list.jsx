/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from './message';
import { getMessages } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch
  );
}

class MessageList extends Component {
  componentWillMount() {
    this.props.getMessages();
  }

  render() {
    console.log(this.props);
    return (
      this.props.messages.map((message) => {
        return <Message key={message.created_at} message={message} />;
      })
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
