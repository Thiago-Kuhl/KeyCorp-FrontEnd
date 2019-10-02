
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

                        <div class="row">
                            <div class="col-3">
                                <div styleName="bloco">

                                </div>
                            </div>
                            <div class="col-3">
                                <div styleName="bloco">

                                </div>
                            </div>
                            <div class="col-3">
                                <div styleName="bloco">

                                </div>
                            </div>
                            <div class="col-3">
                                <div styleName="bloco">

                                </div>
                            </div>
                        </div>

                    </section>

                    <section styleName="box">
                        <div class="row">
                            <div class="col-12">
                                <div styleName="faixa">
                                </div>
                            </div>
                        </div>
                    </section>
{/* 
                    <section styleName="titulo">
                        <div class="row">
                            <div class="col-12">
                                 <h4 id="ctg">Categoria Popular</h4>
                            </div>
                        </div>
                    </section> */}


                    <section styleName="container-pop">
                        <div class="row">
                            <div class="col-12">
                                <div styleName="pop">
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