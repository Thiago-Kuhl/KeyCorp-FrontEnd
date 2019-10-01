
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
            <div styleName="menu">

                <a href="#" styleName="brand-logo">Logo</a>
                <input placeholder="Pesquise aqui..." type="seach" />

                <div styleName="prod-options">
                    <ul>
                        <li>
                            <FontAwesomeIcon styleName="icon1" icon="chevron-down" />
                            <a href="">Categoria</a>
                        </li>

                        <li><a href="">Histórico</a></li>

                        <li>
                            <FontAwesomeIcon styleName="icon1" icon="chevron-down" />
                            <a href="">Ofertas e Descontos</a>
                            <ul>
                                <li><a href="">Office</a></li>
                                <li><a href="">IDEs</a></li>
                                <li><a href="">Design</a></li>
                            </ul>
                        </li>

                        <li><a href="">Contato</a></li>
                    </ul>
                </div>

                <div styleName="user-options">
                    <FontAwesomeIcon styleName="user" icon="user-circle" />
                    <ul>
                        <li>
                            <a href="">Fulano da Silva</a>
                            <ul>
                                <li><a href="">Minha conta</a></li>
                                <li><a href="">Sair</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div styleName="icons">
                    <span>
                        <a href="">
                            <FontAwesomeIcon styleName="icon" icon="bell" />
                        </a>
                    </span>

                    <span>
                        <a href="">
                            <FontAwesomeIcon styleName="icon" icon="shopping-cart" />
                        </a></span>

                    <span>
                        <a href="">
                            <FontAwesomeIcon styleName="icon" icon="heart" />
                        </a>
                    </span>


                </div>
            </div>
        );
    }

}

export default CSSModule(Menu, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })