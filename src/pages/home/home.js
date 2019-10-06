
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './home.module.css';
import Menu from '../menu/menu.js';
import SiteInfo from '../site-info/site-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <>
                <div styleName="Home">

                    <Menu />

                    <div styleName=" bg">

                    </div>

                    <section styleName="container">

                        <div className="row">
                            <div className="col-3">
                                <div styleName="bloco">
                                    <span>
                                        <p>Office 365</p>
                                    </span>

                                    <div styleName="img img-prod1"></div>

                                    <div styleName="desc">
                                        <p>Aplicativos para escritório</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div styleName="bloco">
                                    <p>VS Code</p>
                                    <div styleName="img img-prod2"></div>
                                    <div styleName="desc">
                                        <p>Editor de código-fonte</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div styleName="bloco">
                                    <p>PhotoShop</p>
                                    <div styleName="img img-prod3"></div>
                                    <div styleName="desc">
                                        <p>Editor de imagens bidimensionais</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div styleName="bloco">
                                    <p>Oracle Database</p>
                                    <div styleName="img img-prod4"></div>
                                    <div styleName="desc">
                                        <p>Oracle database 18c</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section styleName="box">
                        <div className="row">
                            <div className="col-4 " styleName="col1">
                                <p><b>Todos os software que você precisa em um só lugar</b></p>
                                <p>Enviado pelo próprio fornecedor</p>
                            </div>
                            <div className="col-4" styleName="col2">
                                <FontAwesomeIcon styleName="icon" icon="inbox" />
                                <p>Reserva antecipada do produto</p>
                            </div>
                            <div className="col-4" styleName="col3">
                                <FontAwesomeIcon styleName="icon" icon="check-circle" />
                                <p>Licença de software autenticada </p>
                            </div>
                        </div>
                    </section>



                    <section styleName="categorias">
                        <div styleName="hearder">
                            <h1><b>Categorias Populares</b></h1>
                        </div>
                        <div className="row" styleName="container">
                            <div styleName="galeria">
                                <div styleName="galeria1">

                                    <div styleName="g">
                                        <div styleName="image foto1"> </div>
                                        <div styleName="categ">
                                            <h1>Escritório</h1>
                                        </div>
                                    </div>

                                    <div styleName="g" >
                                        <div styleName="image foto2"></div>
                                        <div styleName="categ">
                                            <h1>Designer</h1>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto3"></div>
                                        <div styleName="categ">
                                            <h1>Modelagens</h1>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto4"></div>
                                        <div styleName="categ">
                                            <h1>Fluxogramas</h1>
                                        </div>
                                    </div>
                                </div>

                                <div styleName="galeria2">

                                    <div styleName="g">
                                        <div styleName="image foto1"> </div>
                                        <div styleName="categ">
                                            <h1>Editores</h1>
                                        </div>
                                    </div>

                                    <div styleName="g" >
                                        <div styleName="image foto2"></div>
                                        <div styleName="categ">
                                            <h1>IDEs</h1>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto3"></div>
                                        <div styleName="categ">
                                            <h1>Banco de dados</h1>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto4"></div>
                                        <div styleName="categ">
                                            <h1>Outros</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <SiteInfo />

                </div>

            </>
        );
    }
}

export default CSSModule(Home, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })