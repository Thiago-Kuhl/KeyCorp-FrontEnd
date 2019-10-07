
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import style from './contato.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-bootstrap';


class Contato extends React.Component {
    render() {
        return (<>
            <div styleName="contato">

                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Contato</li>
                    </ol>
                </div>

                <div styleName="container">
                    <form styleName="form">
                        <p>Entre em contato conosco</p>

                        <div styleName="wrapper1 wr">

                            <span>
                                <label>Nome</label> <br />
                                <input type="text" placeholder=""></input>
                            </span>

                            <span>
                                <label>Telefone</label> <br />
                                <input type="phone"></input>
                            </span>

                        </div>

                        <div styleName="wrapper2 wr">

                            <span>
                                <label>Email</label> <br />
                                <input type="text"></input>
                            </span>

                        </div>

                        <div styleName="wrapper3 wr">
                            <span>
                                <label>Mensagem</label> <br />
                                <textarea type="text" placeholder="Insira sua mensagem aqui"></textarea>
                            </span>
                        </div>


                        <div styleName="botton">
                            <a href="#">Cancelar</a>
                            <button>Enviar</button>
                        </div>

                    </form>

                </div>

                <section styleName="section">
                    <div styleName="wrapper4">
                        <span>
                            <FontAwesomeIcon styleName="icon" icon="phone-alt" /> &emsp;
                                <label>+55 11 8473-9944</label>
                        </span>

                        <span>
                            <FontAwesomeIcon styleName="icon" icon="envelope-open-text" /> &emsp;
                                <label>suporte@keycorp.com</label>
                        </span>

                    </div>
                </section>

                <section styleName="maps">
                    <div styleName="wrapper5">
                        <span>
                            <label>Venha até a gente</label>
                        </span>

                        <div styleName="img"></div>

                    </div>
                </section>

            </div>

            
             <Footer /> 

             </>
        ); 
    }
}

export default CSSModule(Contato, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })