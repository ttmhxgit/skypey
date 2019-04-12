import React from 'react';
import './Sidebar.css';
import User from '../../components/User';

const SideBar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(item => <User user={item} key={item.user_id} />)}
    </aside>
  )
}

export default SideBar;
