import React from 'react';
import CSSModule from 'react-css-modules';
import style from './categoria.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Filtro from '../filtro-categoria/filtro.js';
import axios from 'axios';
import { Redirect } from 'react-router';


class Categoria extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <Filtro />
                <Footer />
            </>
        )
    }
}

export default CSSModule(Categoria, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })