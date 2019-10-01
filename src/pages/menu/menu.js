
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './menu.module.css';
// import 'use.fontawesome.com/releases/v5.7.0/css/all.css';


class Menu extends React.Component {
    render() {
        return (
            <div styleName="menu">

                <a href="#" styleName="brand-logo">Logo</a>
                <input placeholder="Pesquise aqui..." type="seach" />

                <div styleName="prod-options">
                    <ul>
                        <li>
                            <i>#</i>
                            <a href="">Categoria</a>
                        </li>

                        <li><a href="">Histórico</a></li>

                        <li>
                            <i>#</i>
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
            </div>
        );
    }

}

export default CSSModule(Menu, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })