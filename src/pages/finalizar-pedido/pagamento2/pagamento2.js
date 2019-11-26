import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './pagamento2.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import Resumo from '../../finalizar-pedido/resumo/resumo-pedido'

import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Pagamento2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            instituicao: '',
            nome: '',
            email: '',
            curso: ''
        }
    }

    processOrder = (event) => {

        if(document.getElementById("instituicao").value == "" 
            || document.getElementById("nome").value == ""
            || document.getElementById("email").value == "" 
            || document.getElementById("curso").value == ""){
            alert("Verifique os campos, todos devem ser preenchidos corretamente");
        } else {
            swal("Pedido concluído!", "Verifique sua caixa de email!", "success");
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

                        <h3><b>Solicitar licença estudantil</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Instituição</label> <br />
                                <input id="instituicao" type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input id="nome" type="text"></input>
                            </span>
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Email</label> <br />
                                <input id="email" type="email"></input>
                            </span>

                        </div>

                        <div styleName="wrapper4 wr">

                            <span>
                                <label>Curso</label> <br />
                                <input id="curso" type="text"></input>
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

export default CSSModule(Pagamento2, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })