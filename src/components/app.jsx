import React from 'react';
import ChannelList from '../containers/channellist';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="container">
      <div className="left-box">
        <ChannelList />
      </div>
      <div className="right-box" >
        <h2>Channel #General</h2>
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
