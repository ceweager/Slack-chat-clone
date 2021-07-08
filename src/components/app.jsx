import React from 'react';
import ChannelList from '../containers/channellist';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="container">
      <div className="left-box">
        <ChannelList />
      </div>
      <div className="right-box" >
        <h2>Channel #General</h2>
        <div><MessageList /></div>
      </div>
    </div>
  );
};

export default App;
