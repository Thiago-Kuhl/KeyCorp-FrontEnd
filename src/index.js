import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-bootstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import das pages
import Login from './pages/login/login';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Carrinho from './pages/carrinho/carrinho';
import Cadastro from './pages/cadastro/cadastro';
import Contato from './pages/contato/contato';
import Pedido1 from './pages/finalizar-pedido/finalizar-pedido1/finalizar-pedido1';
import Pedido2 from './pages/finalizar-pedido/finalizar-pedido2/finalizar-pedido2';
import Pedido3 from './pages/finalizar-pedido/finalizar-pedido3/finalizar-pedido3';
import Processamento from './pages/finalizar-pedido/processamento/processamento';
import ResumoPedido from './pages/finalizar-pedido/resumo-pedido/resumo-pedido';

//Para os icones
import { library } from '@fortawesome/fontawesome-svg-core';

import { faChevronDown, faUserCircle,  faBell,
faHeart, faShoppingCart, faInbox,faCheckCircle, 
faCreditCard,faCheckDouble, faShieldAlt, faPhoneAlt,
faEnvelopeOpenText, faChevronRight, faChevronLeft, faKey } from '@fortawesome/free-solid-svg-icons';

 
library.add(faChevronDown, faUserCircle,  faBell,
faHeart, faShoppingCart, faInbox, faCheckCircle,
faCheckDouble, faCreditCard, faShieldAlt, faPhoneAlt,
faEnvelopeOpenText, faChevronRight, faChevronLeft, faKey);

//Rotas

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/carrinho" exact component={Carrinho} />
            <Route path="/pedido" exact component={Pedido1} />
            <Route path="/pedido2" exact component={Pedido2} />
            <Route path="/pedido3" exact component={Pedido3} />
            <Route path="/contato" exact component={Contato} />
            <Route path="/processamento" exact component={Processamento} />
            <Route path="/resumo" exact component={ResumoPedido} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
