import React from 'react';
import CSSModule from 'react-css-modules';
import style from './pagamento1.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
// import Modal from '../popup/popup.js'
<<<<<<< HEAD:src/pages/finalizar-pedido/pagamento1/pagamento1.js
import ResumoPedido1 from '../../../components/product-cart/produto1/resumo-pedido'
import ResumoPedido2 from '../../../components/product-cart/produto2/resumo-pedido'
=======
import ResumoPedido from '../resumo-pedido/resumo-pedido.js'
>>>>>>> master:src/pages/finalizar-pedido/finalizar-pedido2/finalizar-pedido2.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Pagamento1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cartao: '',
            vencimento: '',
            codigo: ''
        }
    }

    render() {
        return (<>

<<<<<<< HEAD:src/pages/finalizar-pedido/pagamento1/pagamento1.js
            <ResumoPedido2 />
=======
            <ResumoPedido />
>>>>>>> master:src/pages/finalizar-pedido/finalizar-pedido2/finalizar-pedido2.js

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

                        <h3><b>Pagamento com cartão de crédito</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input id="nome" type="text" placeholder=""></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>Número do cartão</label> <br />
                                <input id="cartao" type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Vencimento</label> <br />
                                <input id="vencimento" type="date" placeholder=""></input>
                            </span>

                            <span>
                                <label styleName="lb">Código</label> <br />
                                <input id="codigo" styleName="cdg" type="phone"></input>
                            </span>

                        </div>

                        <div styleName="botton">
                            <a href="./processamento">Finalizar &emsp;
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

export default CSSModule(Pagamento1, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })