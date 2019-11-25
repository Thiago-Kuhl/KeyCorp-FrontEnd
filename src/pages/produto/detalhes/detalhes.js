import React from 'react';
import CSSModule from 'react-css-modules';
import style from './detalhes.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../../produto/produto/produto.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import escritorio from '../../../image/escritorio.png'
import postman from '../../../image/postman.png'

var img;

class Detalhes extends React.Component {


    render() {

        var produto = sessionStorage.getItem("id");

        switch(produto){
            case "0":
                img = postman;
                break;
            case "1":
                img = escritorio;
                break;
            case "2":
                img = "";
                break;
            case "4":
                img = "";
                break;
            case "5":
                img ="";
                break;
        }
        

        return (
            <>
                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Detalhes</li>
                        <li className="breadcrumb-item" aria-current="page">{sessionStorage.getItem("titulo")}</li>
                    </ol>
                </div>

                <div className="container" styleName="detalhes">
                    <div className="produto">
                        <div className="row">
                            <div styleName="imgProduct">
                            <img src={img} alt="some text" width="420" height="350"/>
                            </div>
                        </div>

                        <div styleName="info">
                                <h1 styleName="title">{sessionStorage.getItem("titulo")}</h1>
                                <div styleName="rating"></div>
                                <h1 styleName="valor-original">Preço: R${sessionStorage.getItem("valor")}</h1>
                        </div>

                        <div styleName="buttom">
                               <Button styleName="btn1 text"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar aos Favoritos</Button> &nbsp;

                            <Link  to="./pedido">
                                <Button styleName="btn2 text"><FontAwesomeIcon icon="fa-shopping-cart" /> Comprar</Button>
                            </Link>
                       </div>
                    </div>
                    <div className="row">
                        <div styleName="descricao">
                            <h3 styleName="desc-title">Detalhes do Produto</h3>
                            <p styleName="desc-text">{sessionStorage.getItem("descricao")}</p>
                        </div>
                    </div>
                </div>
                {/* <Similares /> */}
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
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(Detalhes, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })