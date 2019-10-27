import React from 'react';
import CSSModule from 'react-css-modules';
import style from './menu-user.module.css';
import 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MenuUser extends React.Component {
    render() {
        return (
            <div styleName="menu">
                <div styleName="container">
                    <div className="col-4">
                        <nav styleName="nav-sidebar">
                            <h3>Minha Conta</h3>
                            <ul styleName="nav tabs">
                                <li>
                                    <a href="">Meus dados
                                    <FontAwesomeIcon styleName="icon1" icon="chevron-right" />
                                    </a>
                                </li>

                                <li>
                                    <a href="">Alterar senha
                                    <FontAwesomeIcon styleName="icon2" icon="chevron-right" />
                                    </a> 
                                </li>
                                <li>
                                    <a href="">Histórico de Compras
                                    <FontAwesomeIcon styleName="icon3" icon="chevron-right" />
                                    </a> 
                                </li>
                                <li>
                                    <a href="">Meus favoritos
                                    <FontAwesomeIcon styleName="icon4" icon="chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModule(MenuUser, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })