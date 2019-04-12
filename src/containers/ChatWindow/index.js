import React from 'react';
import store from '../../store/store';
import Header from '../../components/Header';
import Chat from '../../components/Chat';
import MessageInput from '../MessageInput';
import _ from 'lodash';
import './ChatWindow.css';

const ChatWindow = ({activeUserId}) => {
  const { contacts, messages, typing } = store.getState();
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header activeUser={activeUser} />
      <Chat messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  )
}

export default ChatWindow;
