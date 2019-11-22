import React from 'react';
import CSSModule from 'react-css-modules';
import style from './detalhes.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../../produto/produto/produto.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Detalhes extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container" styleName="detalhes">
                    <div className="produto">
                        <div className="row">
                            <div styleName="imgProduct"></div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h1 styleName="title">Produto xyz</h1>
                                <div styleName="rating"></div>
                                <h1 styleName="valor-original">De: R$100.00</h1>
                                <h1 styleName="promo">Por: R$99.00</h1>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <Button styleName="btn text" href="#"><FontAwesomeIcon icon="fa-shopping-cart" /> Wishlist</Button>
                                </div>
                                <div className="col-6">
                                    <Button styleName="btn text" href="#"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar ao Carrinho</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div styleName="descricao">
                            <h3 styleName="desc-title">Detalhes do Produto</h3>
                            <p styleName="desc-text">dlsmfiulsdh fuihsfiush difdnfhusf oisfu yisdufydsfiusdfu</p>
                        </div>
                    </div>
                </div>
                <Similares />
                <Footer />
            </>
        )
    }
}

class Similares extends React.Component {
    render() {
        return (
            <>
                <div styleName="produtos">
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(Detalhes, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })