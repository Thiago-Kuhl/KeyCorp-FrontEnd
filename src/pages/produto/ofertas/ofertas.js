import React from 'react';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './ofertas.module.css';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../produto/produto.js';



class Ofertas extends React.Component {

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
                        <li className="breadcrumb-item" aria-current="page">Ofertas do Dia</li>
                    </ol>
                </div>

                <div className="container" styleName="page">
                    <div className="row">
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


export default CSSModule(Ofertas, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })