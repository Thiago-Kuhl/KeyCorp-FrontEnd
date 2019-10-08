
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './home.module.css';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import SiteInfo from '../site-info/site-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <>
                <Menu />

                <div styleName="Home">
                    <div styleName=" bg"></div>

                    <section styleName="container">

                        <div className="row">
                            <div className="col-3">
                                <div styleName="bloco">
                                    <span>
                                        <h3>Office 365</h3>
                                    </span>

                                    <div styleName="img img-prod1">
                                       
                                    </div>

                                    <div styleName="desc">
                                        <h3>Aplicativos para escritório</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div styleName="bloco">
                                    <h3>VS Code</h3>
                                    <div styleName="img img-prod2"></div>
                                    <div styleName="desc">
                                        <h3>Editor de código-fonte</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div styleName="bloco">
                                    <h3>PhotoShop</h3>
                                    <div styleName="img img-prod3"></div>
                                    <div styleName="desc">
                                        <h3>Editor de imagens bidimensionais</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div styleName="bloco">
                                    <h3>Oracle Database</h3>
                                    <div styleName="img img-prod4"></div>
                                    <div styleName="desc">
                                        <h3>Oracle database 18c</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section styleName="box">
                        <div className="row">
                            <span styleName="linha"></span>
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
                                            <h3>Escritório</h3>
                                        </div>
                                    </div>

                                    <div styleName="g" >
                                        <div styleName="image foto2"></div>
                                        <div styleName="categ">
                                            <h3>Designer</h3>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto3"></div>
                                        <div styleName="categ">
                                            <h3>Modelagens</h3>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto4"></div>
                                        <div styleName="categ">
                                            <h3>Fluxogramas</h3>
                                        </div>
                                    </div>
                                </div>

                                <div styleName="galeria2">

                                    <div styleName="g">
                                        <div styleName="image foto1"> </div>
                                        <div styleName="categ">
                                            <h3>Editores</h3>
                                        </div>
                                    </div>

                                    <div styleName="g" >
                                        <div styleName="image foto2"></div>
                                        <div styleName="categ">
                                            <h3>IDEs</h3>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto3"></div>
                                        <div styleName="categ">
                                            <h3>Banco de dados</h3>
                                        </div>
                                    </div>

                                    <div styleName="g">
                                        <div styleName="image foto4"></div>
                                        <div styleName="categ">
                                            <h3>Outros</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <SiteInfo />

                    <Footer />

                </div>

            </>
        );
    }
}

export default CSSModule(Home, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })