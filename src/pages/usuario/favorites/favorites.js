import React from 'react';
import CSSModule from 'react-css-modules';
import style from './favorites.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import ProdutoGrid from '../../produto/produto-grid/produto-grid.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';
import { Redirect } from 'react-router';


class Favorites extends React.Component {
    render() {
    return (
        <>
        <Menu />
        <ProdutoGrid />
        <MenuUser />
        <Footer />
        </>
    )}
}

export default CSSModule(Favorites, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })