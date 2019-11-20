import React from 'react';
import { Link } from 'react-router-dom';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import CSSModule from 'react-css-modules';
import style from './pedido.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import Resumo from '../resumo/resumo-pedido';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

var option;
class Pedido extends React.Component {

    clearStorage = (event) =>{
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

    choose = (event) =>{
        option = event.target.value;

        console.log(option);
    }

    option = (event) =>{
    
            switch(option){
                case "0":
                    window.location.href="./pagamento1";
                break;
    
                case "1":
                    window.location.href="";
                break;
    
                case "2":
                   window.location.href="./pagamento2";
                break;
            }
    }
    
    render() {
        return (<>

            <Resumo />

            <div styleName="finalizar-pedido">

            <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Finalizar pedido</li>
                    </ol>
                </div>

                <div styleName="icone-voltar">
                    <a href="./categoria">
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

                        <div styleName="wrapper3" onChange={this.choose.bind(this)}>
                            <span>
                                <label><b>Como você prefere pagar?</b></label> <br />

                                <select styleName="select">
                                    <option>Escolha a forma de pagamento</option> <br />
                                    <option className="band-rock" value="0" id="option">Cartão de crédito </option> <br />
                                    <option className="band-rock" value="1" id="option">Boleto bancário</option> <br />
                                    <option className="band-rock" value="2" id="option">Pedir licença do estudante </option>
                                </select>

                            </span>
                        </div>

                        <div styleName="botton" onClick={(event) => this.option(event)}>
                            <Link >Proxima etapa &emsp;
                            <FontAwesomeIcon styleName="icon pxm" icon="chevron-right" />
                            </Link>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />
        </>)
    }
}

export default CSSModule(Pedido, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })