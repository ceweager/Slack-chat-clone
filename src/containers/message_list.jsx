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

  componentDidMount() {
    this.refresher = setInterval(this.props.getMessages(), 2000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    console.log(this.props);
    return (
      <div ref={(list) => { this.list = list; }}>
        {
          this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
