
import React, { Component } from 'react';
import UserCart from '../carrinho/user-cart/user-cart'
import GuestCart from '../carrinho/guest-cart/guest-cart'

import Cookies from 'universal-cookie';

class Carrinho extends Component {
  render(){
<<<<<<< HEAD
    const cookies = new Cookies();

    if(cookies.get('idUsuario') != undefined){
      return <UserCart/> ;
=======

    const isLoggedIn = false;

    if(isLoggedIn){
      return < UserCart/> ;
>>>>>>> master
    }

    return <GuestCart />;
  }
}

  export default Carrinho;