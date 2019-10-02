
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './home.module.css';
import Menu from '../menu/menu.js'

import 'react-bootstrap';


class Home extends React.Component {
    render() {
        return (
            <>
                <div styleName="Home">

                    {/* <Menu /> */}

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
                                        <p>Pacote de aplicativos para escritório</p>
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
                                        <p>Editor de imagens bidimensionais do tipo raster</p>
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
                            <div className="col-12">
                                <div styleName="faixa">
                                    <div className="row">
                                        <div className="col-4">
                                            <div styleName="line"></div>
                                            <div styleName="desc">
                                                <p><b>Todos os software que você precisa em um só lugar</b></p>
                                                <p>Enviado pelo próprio fornecedor</p>
                                            </div>
                                        </div>

                                        <div className="col-4 cols">

                                        </div>

                                        <div className="col-4 cols">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section styleName="titulo">
                        <div className="row">
                            <div className="col-12">
                                <h4>Categoria Popular</h4>
                            </div>
                        </div>
                    </section>


                    <section styleName="container-pop">
                        <div className="row">
                            <div className="col-12 ">
                                <div styleName="pop">
                                </div>
                            </div>
                        </div>

                    </section>


                    <section styleName="container-faixa">
                        <div className="row">
                            <div className="col-12">
                                <div styleName="faixa">
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </>
        );
    }
}

export default CSSModule(Home, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })