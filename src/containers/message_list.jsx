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
    this.props.getMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(() => { this.props.getMessages(this.props.selectedChannel); }, 1000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div style={{ height: "85%" }}>
        <h2>Channel #{this.props.selectedChannel}</h2>
        <div className="message-box" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.created_at} message={message} />;
            })
          }
        </div>
      </div >
    );
  }
}

function mapStateToProps(state) {
  console.log("current state", state);
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
