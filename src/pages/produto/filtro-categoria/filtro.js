import React from 'react';
import CSSModule from 'react-css-modules';
import style from './filtro.module.css';
import 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Filtro extends React.Component {
    render() {
        return (
            <>
                <div styleName="container">
                    <div className="col-4">
                        <nav styleName="nav-sidebar">
                            <h3>Filtrar por:</h3>
                            <ul styleName="nav tabs">
                                <li>
                                    <u>Tecnologia</u>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                            </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <u>Autor</u>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                            </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <u>Faixa de Preço</u>
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                            </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                        <li><FontAwesomeIcon icon="fa-square" />
                                            teste teste teste teste teste
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(Filtro, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })