
import React from 'react';
import ReactDOM from 'react-dom'; 
import UserUsuario from '../menu-user1/menu-user1'
import GuestUsuario from '../menu-user2/menu-user2'


function Usuario(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <GuestUsuario />;
    }
    return <UserUsuario />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Usuario isLoggedIn={false} />,
    document.getElementById('root')
  );

  export default Usuario;