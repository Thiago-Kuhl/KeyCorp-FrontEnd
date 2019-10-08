import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './finalizar-pedido3.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import ResumoPedido from '../resumo-pedido/resumo-pedido.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Pedido3 extends React.Component {
    render() {
        return (<>

            <Menu />

            <ResumoPedido/>

            <div styleName="finalizar-pedido">
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item"><a href="./carrinho">Carrinho</a></li>
                        <li className="breadcrumb-item" aria-current="page">Finalizar pedido</li>
                    </ol>
                </div>

                <div styleName="icone-voltar">
                    <a href="./carrinho">
                        <FontAwesomeIcon styleName="icon " icon="chevron-left" /> &emsp;
                    </a>

                </div>

                <div styleName="container">
                    <form styleName="form">

                        <h3><b>Solicitar licença estudantil</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Instituição</label> <br />
                                <input type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Email</label> <br />
                                <input type="email"></input>
                            </span>

                        </div>

                        <div styleName="wrapper4 wr">

                            <span>
                                <label>Curso</label> <br />
                                <input type="text"></input>
                            </span>

                        </div>

                        <div styleName="botton">
                            <a href="./processamento">Proxima etapa &emsp;
                            <FontAwesomeIcon styleName="icon" icon="chevron-right" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>)
    }
}

export default CSSModule(Pedido3, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })