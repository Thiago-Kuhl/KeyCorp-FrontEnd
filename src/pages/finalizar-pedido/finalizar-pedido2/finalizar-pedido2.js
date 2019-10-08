import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './finalizar-pedido2.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import ResumoPedido from '../resumo-pedido/resumo-pedido.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Pedido2 extends React.Component {
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

                        <h3><b>Pagamento com cartão de crédito</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input type="text" placeholder=""></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>Número do cartão</label> <br />
                                <input type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Vencimento</label> <br />
                                <input type="date" placeholder=""></input>
                            </span>

                            <span>
                                <label>Código de segurança</label> <br />
                                <input styleName="cdg" type="phone"></input>
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

export default CSSModule(Pedido2, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })