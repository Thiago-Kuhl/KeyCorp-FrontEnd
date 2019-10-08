
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './carrinho.module.css';
import Menu from '../menu/menu.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Carrinho extends React.Component {
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
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#Carrinho" role="tab" aria-controls="home" aria-selected="true">Carrinho</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Salvos" role="tab" aria-controls="profile" aria-selected="false">Salvos</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                    <div class="tab-pane fade" id="perfil" role="tabpanel" aria-labelledby="profile-tab">jdnwjkdn</div>
                                </div>
                            </div>      

</div>
                            <div className="col-3" styleName="col2">
                                <div styleName="titulo">
                                    <p>Resumo do pedido</p>
                                </div>

                                <div styleName="button">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Aplicar cupom" aria-label="Aplicar cupom" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" type="button">Aplicar</button>
                                        </div>
                                    </div>
                                </div>

                                <div styleName="total">
                                    <p><b>Total: </b> R$199,99</p>
                                </div>

                                <div styleName="btnFinalizar">
                                    <button>Finalizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>);
        }
    }
    
export default CSSModule(Carrinho, style, {allowMultiple: true, handleNotFoundStyleName: "ignore" })