import React from 'react';
import './Main.css';
import Empty from '../../components/Empty';
import ChatWindow from '../ChatWindow/index';

const Main = ({user, activeUserId}) => {
  const renderMainContainer = () => {
    if(!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />
    } else {
      return <ChatWindow activeUserId={activeUserId} />
    }
  }
  return(
    <main className="Main">{renderMainContainer()}</main>
  )
}

export default Main;