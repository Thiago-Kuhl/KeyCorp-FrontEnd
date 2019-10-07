import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-bootstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import das pages
import Login from './pages/login/login';
import Home from './pages/home/home'
import Menu from './pages/menu/menu'
import Carrinho from './pages/carrinho/carrinho'
import Cadastro from './pages/cadastro/cadastro'
import Contato from './pages/contato/contato'

//Para os icones
import { library } from '@fortawesome/fontawesome-svg-core';

import { faChevronDown, faUserCircle,  faBell,
faHeart, faShoppingCart, faInbox,faCheckCircle, 
faCreditCard,faCheckDouble, faShieldAlt, faPhoneAlt,
faEnvelopeOpenText,  faKey } from '@fortawesome/free-solid-svg-icons';

 
library.add(faChevronDown, faUserCircle,  faBell,
faHeart, faShoppingCart, faInbox, faCheckCircle,
faCheckDouble, faCreditCard, faShieldAlt, faPhoneAlt,
faEnvelopeOpenText, faKey);

//Rotas

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/carrinho" exact component={Carrinho} />
            <Route path="/contato" exact component={Contato} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
