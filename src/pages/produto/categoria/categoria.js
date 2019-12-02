import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './categoria.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Filtro from '../filtro-categoria/filtro.js';
import Produto from '../produto/produto.js';
import axios from 'axios';



class Categoria extends React.Component {

    clearStorage = (event) => {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

    render() {
        return (
            <>
                <Menu />
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Produtos</li>
                    </ol>
                </div>

                <div className="container" styleName="page">
                    <div className="row">
                        <div className="col-12">
                            <Filtro />
                        </div>
                        <div className="col-12" styleName="grid-fix">
                            <div styleName="produtos">
                                <h3 styleName="heading">Produtos</h3>
                                <div className="row">
                                    <Produto />
                                    <Produto />
                                    <Produto />
                                </div>
                                <div className="row">
                                    <Produto />
                                    <Produto />
                                    <Produto />
                                </div>
                                <div className="row">
                                    <Produto />
                                    <Produto />
                                    <Produto />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}


export default CSSModule(Categoria, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })