
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './menu.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Menu extends React.Component {
    render() {
        return (
            <div styleName="hearder">
                <div styleName="container">
                    <div className="row">

                        <div className="col col-lg-1" styleName="logo">
                            <a href="#" styleName="brand-logo">Logo</a>
                        </div>

                        <div className="col-md-7" styleName="navegacao">
                            <div className="row" styleName="barra">
                                <input placeholder="Pesquise aqui..." type="seach" />
                            </div>

                            <div className="row" styleName="produto">

                                <div styleName="prod-options">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon styleName="icon1" icon="chevron-down" />
                                            <a href="">Categoria</a>
                                            <ul>
                                                <li><a href="">Exclusivos</a></li>
                                                <li><a href="">Escola</a></li>
                                                <li><a href="">Criatividade</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="">Histórico</a></li>

                                        <li>
                                            <FontAwesomeIcon styleName="icon1" icon="chevron-down" />
                                            <a href="">Ofertas</a>
                                            <ul>
                                                <li><a href="">Office</a></li>
                                                <li><a href="">IDEs</a></li>
                                                <li><a href="">Design</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="./contato">Contato</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-1" styleName="usuario">
                            <div styleName="user-options">
                                <FontAwesomeIcon styleName="user" icon="user-circle" />
                                <ul>
                                    <li>
                                        <a href="">Fulano da Silva</a>
                                        <ul>
                                            <li><a href="">Minha conta</a></li>
                                            <li><a href="./login">Sair</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2" styleName="atalhos">
                            <div styleName="icons">
                                <span>
                                    <a href="">
                                        <FontAwesomeIcon styleName="icon" icon="bell" />
                                    </a>
                                </span>

                                <span>
                                    <a href="./carrinho">
                                        <FontAwesomeIcon styleName="icon" icon="shopping-cart" />
                                    </a></span>

                                <span>
                                    <a href="">
                                        <FontAwesomeIcon styleName="icon" icon="heart" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CSSModule(Menu, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })