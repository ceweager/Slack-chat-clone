/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSelectedChannel } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { updateSelectedChannel: updateSelectedChannel },
    dispatch
  );
}

class ChannelList extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.updateSelectedChannel(event.target.innerText);
  }
  render() {
    let classes = "";
    return (
      <div>
        <h2>Channels</h2>
        <div className="Links">
          {this.props.channels.map((channel) => {
            if (this.props.selectedChannel === channel) {
              classes = "selected";
            } else {
              classes = "";
            }
            return (
              <h3 key={channel} className={classes} onClick={this.handleClick} >
                {channel}
              </h3>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
