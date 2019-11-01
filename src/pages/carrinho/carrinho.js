
import React, { Component } from 'react';
import UserCart from '../carrinho/user-cart/user-cart'
import GuestCart from '../carrinho/guest-cart/guest-cart'


class Carrinho extends Component {
  render(){

    const isLoggedIn = false;

    if(isLoggedIn){
      return < UserCart/> ;
    }

    return <GuestCart />;
  }
}

  export default Carrinho;