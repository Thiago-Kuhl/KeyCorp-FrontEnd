
import React, { Component } from 'react';
import UserUsuario from '../menu-user1/menu-user1'
import GuestUsuario from '../menu-user2/menu-user2'

class Usuario extends Component {
  
  render(){

    const isLoggedIn = false;

    if(isLoggedIn){
        return <UserUsuario/>
    } 
      return <GuestUsuario />;
  }
}


export default Usuario;