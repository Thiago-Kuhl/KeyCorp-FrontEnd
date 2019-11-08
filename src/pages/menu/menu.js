
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './menu.module.css';
import Usuario from '../menu/usuario/usuario'
import Logo from '../../external-components/logo/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
    render() {
        return (
            <div styleName="hearder">
                <div styleName="container">
                    <div className="row">

                    {/* <Logo/> */}

                        <div className="col-md-7" styleName="navegacao">
                            <div className="row" styleName="barra">
                                <input placeholder="Pesquise aqui..." type="seach" />
                            </div>

                            <div className="row" styleName="produto">

                                <div styleName="prod-options">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon styleName="icon1" icon="chevron-down" />
                                            <a href="">Categorias</a>
                                            <ul styleName="ul">
                                                <li><a href="">Exclusivos</a></li>
                                                <li><a href="">Escola</a></li>
                                                <li><a href="">Criatividade</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            {/* <FontAwesomeIcon styleName="icon1" icon="chevron-down" /> */}
                                            <a href="">Ofertas</a>
                                            {/* <ul>
                                                <li><a href="">Office</a></li>
                                                <li><a href="">IDEs</a></li>
                                                <li><a href="">Design</a></li>
                                            </ul> */}
                                        </li>

                                        <li><a href="">Saiba mais</a></li>

                                        <li><a href="./contato">Contato</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Usuario />

                        <div className="col col-lg-2" styleName="atalhos">
                            <div styleName="icons">
                                <span>
                                    <div>
                                        <Link to="./historico">
                                            <FontAwesomeIcon styleName="icon" icon="bell" />
                                        </Link>
                                    </div>
                                </span>

                                <span>
                                    <Link to="./carrinho">
                                        <FontAwesomeIcon styleName="icon" icon="shopping-cart" />
                                    </Link>
                                </span>

                                <span>
                                    <Link to="/favoritos">
                                        <FontAwesomeIcon styleName="icon" icon="heart" />
                                    </Link>
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