import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-bootstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import das pages
import Login from './pages/login/login';
import Home from './pages/home/home';
import Categoria from './pages/produto/categoria/categoria';
import Menu from './pages/menu/menu';
import Carrinho from './pages/carrinho/carrinho';
import Cadastro from './pages/cadastro/cadastro';
import Contato from './pages/contato/contato';
import Produto from './pages/produto/produto/produto';
import Pedido from './pages/finalizar-pedido/pedido/pedido';
import Pagamento1 from './pages/finalizar-pedido/pagamento1/pagamento1';
import Pagamento2 from './pages/finalizar-pedido/pagamento2/pagamento2';


import Favorites from './pages/usuario/favorites/favorites' ;
import Logo from  './external-components/logo/logo';
import UserCart from  './pages/carrinho/user-cart/user-cart';


import MenuUser from './pages/usuario/menu-user/menu-user';
import Account from './pages/usuario/minha-conta/account' ;
import Password from './pages/usuario/alterar-senha/password' ;
import SimpleMap from  './external-components/maps/maps';
import Usuario from  './pages/menu/usuario/usuario';
import NotFoundSearch from './components/search/search'

//Para os icones
import { library } from '@fortawesome/fontawesome-svg-core';

import { faChevronDown, faUserCircle,  faBell,
faHeart, faShoppingCart, faInbox,faCheckCircle, 
faCreditCard,faCheckDouble, faShieldAlt, faPhoneAlt,

faEnvelopeOpenText, faChevronRight, faChevronLeft, faKey,
faFrown, faRobot} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faUserCircle,  faBell,
    faHeart, faShoppingCart, faInbox, faCheckCircle,
    faCheckDouble, faCreditCard, faShieldAlt, faPhoneAlt,
    faEnvelopeOpenText, faChevronRight, faChevronLeft, faKey,
    faFrown, faRobot );
//Rotas

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/carrinho" exact component={Carrinho} />
            <Route path="/pedido" exact component={Pedido} />
            <Route path="/pagamento1" exact component={Pagamento1} />
            <Route path="/pagamento2" exact component={Pagamento2} />
            <Route path="/contato" exact component={Contato} />
            <Route path="/menu-user" exact component={MenuUser} />
            <Route path="/account" exact component={Account} />
            <Route path="/password" exact component={Password} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/SimpleMap" exact component={SimpleMap} />
            <Route path="/categoria" exact component={Categoria} />
            <Route path="/produto" exact component={Produto} />
            <Route path="/logo" exact component={Logo} />
            <Route path="/cart" exact component={UserCart} />
            <Route path="/search" exact component={NotFoundSearch} />
            <Route path="/menu-user" exact component={MenuUser} />
            <Route path="/account" exact component={Account} />
            <Route path="/password" exact component={Password} />
            <Route path="/SimpleMap" exact component={SimpleMap} />
            <Route path="/categoria" exact component={Categoria} />
            <Route path="/produto" exact component={Produto} />


        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

