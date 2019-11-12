import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import CSSModule from 'react-css-modules';
import style from './pedido.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import ResumoPedido1 from '../../../components/product-cart/produto1/resumo-pedido';
import ResumoPedido2 from '../../../components/product-cart/produto2/resumo-pedido';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Pedido extends React.Component {
    render() {
        return (<>

            <ResumoPedido2 />

            <div styleName="finalizar-pedido">

            <Menu />

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
                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Nome</label> <br />
                                <input type="text" placeholder=""></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>CPF</label> <br />
                                <input type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper3">
                            <span>
                                <label><b>Como você prefere pagar?</b></label> <br />

                                <p styleName="ipt">
                                    <label><input type="radio" name="band-rock" value="credito" />&emsp; Cartão de crédito </label> <br />
                                    <label><input type="radio" name="band-rock" value="credito" />&emsp; Boleto bancário</label> <br />
                                    <label><input type="radio" name="band-rock" value="credito" />&emsp; Pedir licença do estudante </label>
                                </p>

                            </span>
                        </div>

                        <div styleName="botton">
                            <a href="">Proxima etapa &emsp;
                            <FontAwesomeIcon styleName="icon pxm" icon="chevron-right" />
                            </a>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />
        </>)
    }
}

export default CSSModule(Pedido, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })