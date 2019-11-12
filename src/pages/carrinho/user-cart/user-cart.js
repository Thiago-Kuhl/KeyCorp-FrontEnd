import React from 'react';
import CSSModule from 'react-css-modules';
import style from './user-cart.module.css';
import Menu from '../../menu/menu.js'
import Footer from '../../footer/footer'
import Produto1 from  '../../../components/product-cart/produto1/produto1'
import ResumoPedido1 from   '../../../components/product-cart/produto1/resumo-produto'
import Produto2 from  '../../../components/product-cart/produto2/produto2'
import ResumoPedido2 from   '../../../components/product-cart/produto2/resumo-produto'

class UserCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cupom: '',
            qtd: ''
        }
    }

    render() {
        return (

            <>

                <Menu />

                <div styleName="carrinho">
                    <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meu carrinho</li>
                        </ol>
                    </div>

                    <div styleName="container">
                        <div className="row">
                            <div className="col-6" styleName="col1">

                                <div styleName="titulo1">
                                    <p>Carrinho</p>
                                </div>

                                <div styleName="car">
                                   <Produto2/>
                                </div>

                            </div>
                            <div className="col-3" styleName="col2">
                                <div styleName="titulo2">
                                    <p>Resumo do pedido</p>
                                </div>

                                <div styleName="button">
                                    <div className="input-group mb-3">
                                        <input id="cupom" type="text" className="form-control" placeholder="Aplicar cupom" aria-label="Aplicar cupom" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="submit">Aplicar</button>
                                        </div>
                                    </div>
                                </div>

                               <ResumoPedido2/>

                                <div styleName="btnFinalizar">
                                    <a href="./pedido">
                                        <button type="submit">Finalizar</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default CSSModule(UserCart, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })