/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {

  convertDate = () => {
    const date = new Date(this.props.message.created_at);
    return (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
  }

  render() {
    console.log(this.props.userColor);
    return (
      <div className="message-style">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ color: `${this.props.userColor}`, display: "inline-block" }}>{this.props.message.author}</h3>
          <h5 style={{ display: "inline-block" }}>{this.convertDate()}</h5>
        </div>
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
