
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './carrinho.module.css';
import Menu from '../menu/menu.js'
import Footer from '../footer/footer'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Carrinho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cupom: '',
            qtd: ''
        }
    }


    render() {
        return (<>

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
                            <div styleName="car">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#Carrinho" role="tab" aria-controls="home" aria-selected="true">Carrinho</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#Salvos" role="tab" aria-controls="profile" aria-selected="false">Salvos</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="carinho" role="tabpanel" aria-labelledby="home-tab">
                                        <div styleName="imagem-carrinho"> </div>

                                        <div styleName="info-carrinho">
                                            <span>
                                                <h3><b>Ebook Marketing Digital</b></h3>
                                            </span>

                                            <span styleName="desc">
                                                <h3>Ações de comunicação que as empresas podem utilizar por meio da internet</h3>
                                            </span>
                                        </div>

                                        <div styleName="iptCar">
                                            <input id="qtd" type="number" placeholder="1" />
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="salvos" role="tabpanel" aria-labelledby="profile-tab">jdnwjkdn</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-3" styleName="col2">
                            <div styleName="titulo">
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

                            <div styleName="total">
                                <p><b>Total: </b> R$199,99</p>
                            </div>

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
        </>);
    }
}

export default CSSModule(Carrinho, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })