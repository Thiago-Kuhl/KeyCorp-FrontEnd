import React from 'react';
import CSSModule from 'react-css-modules';
import style from './pagamento1.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import Resumo from '../resumo/resumo-pedido';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';


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

        processOrder = (event) => {
            
            if(document.getElementById("nome").value == "" 
                || document.getElementById("cartao").value == ""
                || document.getElementById("vencimento").value == "" 
                || document.getElementById("codigo").value == ""){
                alert("Verifique os campos, todos devem ser preenchidos corretamente");
            } else {

                const pedido = {
                    valorTotal: sessionStorage.getItem('valor'),
                    tipoPagamento: 1,
                    idProduto :  sessionStorage.getItem('id'),
                };

                const cookies = new Cookies();

        
                axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
                axios.post('http://35.237.84.170/insert/order/' + cookies.get('idUsuario'), pedido)
                    .then(res => {
                        swal( `Pedido  ${sessionStorage.getItem('titulo') } concluído!`, "Verifique sua caixa de email!", "success");
                    })
                    .catch(error => {
                        swal( `Erro no processamento do pedido  ${sessionStorage.getItem('titulo') }!`, "Por favor, tente novamente mais tarde!", "error");
                    })
            } 

            setInterval(() => {
                window.location.href="./";
            }, 5000);
        }

    clearStorage = (event) =>{
        window.sessionStorage.clear();
        window.localStorage.clear();
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

                        <h3><b>Pagamento com cartão de crédito</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input id="nome" type="text" placeholder="" ></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>Número do cartão</label> <br />
                                <input maxLength="16" minLength="14" id="cartao" type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Vencimento</label> <br />
                                <input  id="vencimento" type="month" placeholder=""></input>
                            </span>

                            <span>
                                <label styleName="lb">Código</label> <br />
                                <input maxLength="3" minLength="3" id="codigo" styleName="cdg" type="phone"></input>
                            </span>

                        </div>

                        <div styleName="botton"  onClick={(event) => this.processOrder(event)}>
                            <Link>Finalizar &emsp;
                            <FontAwesomeIcon styleName="icon" icon="chevron-right" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />

        </>)
    }
}

export default CSSModule(Pagamento1, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })