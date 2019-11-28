import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CSSModule from 'react-css-modules';
import style from './home.module.css';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import SiteInfo from '../site-info/site-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { func } from 'prop-types';
import 'react-bootstrap';
import axios from 'axios';

const cookies = new Cookies();
var id;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: cookies.get('idUsuario'),
        }
        console.log(cookies.get('idUsuario'));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.84.170/search/products')
            .then(res =>  {

                console.log(res.status);
                console.log(res.data[id])
    
                var resposta = res.data;

                sessionStorage.setItem('titulo', resposta[id].nomeProduto);
                sessionStorage.setItem('valor', resposta[id].valorBase);
                sessionStorage.setItem('descricao', resposta[id].descProduto);
                sessionStorage.setItem('id', id);

                console.log(resposta[id].nomeProduto);

                return window.location.href="./detalhes";

                }   
            )
            .catch(error => {
                return error;
            }
            )     
    }


    render() {
        console.log(this.state);

        return (
            <>
                <Menu />

                <div styleName="Home">

                    <div styleName="bg"></div>

                    <section styleName="container">

                        <div className="row">
                            <div className="col-3" onClick={() => id = 4}>
                               
                                <div onClick={this.handleSubmit}  styleName="bloco">
                                    <Link>
                                        <span >
                                            <h3>Office 365</h3>
                                        </span>

                                        <div styleName="img img-prod1">

                                        </div>

                                        <div styleName="desc">
                                            <h3>Aplicativos para escritório</h3>
                                        </div>
                                    </Link>
                                </div>
                            
                            </div>
                            <div className="col-3" onClick={() => id = 0}>
                                    <div styleName="bloco" onClick={this.handleSubmit} id="2">
                                        <Link styleName="bl">
                                            <h3>Postman</h3>
                                            <div styleName="img img-prod2"></div>
                                            <div styleName="desc">
                                                <h3>Testes de API Web</h3>
                                            </div>
                                        </Link>
                                    </div>
                         
                            </div>
                            <div className="col-3" onClick={() => id = 2}>
                                <div styleName="bloco" onClick={this.handleSubmit} id="3">
                                <Link>
                                        <h3>PhotoShop</h3>
                                        <div styleName="img img-prod3"></div>
                                        <div styleName="desc">
                                            <h3>Editor de imagens bidimensionais</h3>
                                        </div>
                                </Link>
                                </div>
                            </div>
                            <div className="col-3" onClick={() => id = 0}>
                                <div styleName="bloco" onClick={this.handleSubmit} id="3" id="4">
                                    <Link>
                                        <h3>Oracle Database</h3>
                                        <div styleName="img img-prod4"></div>
                                        <div styleName="desc">
                                            <h3>Oracle database 18c</h3>
                                        </div>
                                     </Link>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section styleName="box">
                        <div className="row">
                            <span styleName="linha"></span>
                            <div className="col-4 " styleName="col1">
                                <p><b>Todos os software que você precisa em um só lugar</b></p>
                                <p>Enviado pelo próprio fornecedor</p>
                            </div>
                            <div className="col-4" styleName="col2">
                                <FontAwesomeIcon styleName="icon" icon="inbox" />
                                <p>Reserva antecipada do produto</p>
                            </div>
                            <div className="col-4" styleName="col3">
                                <FontAwesomeIcon styleName="icon" icon="check-circle" />
                                <p>Licença de software autenticada </p>
                            </div>
                        </div>
                    </section>

                    <section styleName="categorias">

                        <div styleName="hearder">
                            <h1><b>Categorias Populares</b></h1>
                        </div>

                        <div className="row" styleName="container">
                            <div styleName="galeria">
                                <div styleName="galeria1">

                                    <div styleName="g" onClick={() => id = 1}>
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto1"> </div>
                                            <div styleName="categ">
                                                <h3>Escritório</h3>
                                            </div>
                                        </Link>
                                    </div>


                                    <div styleName="g" onClick={() => id = 1}>
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto2"></div>
                                            <div styleName="categ">
                                                <h3>Designer</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div styleName="g" onClick={() => id = 1}>
                                         <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto3"></div>
                                            <div styleName="categ">
                                                <h3>Modelagens</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div styleName="g" onClick={() => id = 1}>
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto4"></div>
                                            <div styleName="categ">
                                                <h3>Fluxogramas</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div styleName="galeria2">

                                    <div styleName="g" onClick={() => id = 1}>
                                         <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto1"> </div>
                                            <div styleName="categ">
                                                <h3>Editores</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div styleName="g" onClick={() => id = 1}>
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto2"></div>
                                            <div styleName="categ">
                                                <h3>IDEs</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div styleName="g" onClick={() => id = 1}>
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto3"></div>
                                            <div styleName="categ">
                                                <h3>Banco de dados</h3>
                                            </div>
                                        </Link>
                                    </div>

                                    <div styleName="g" onClick={() => id = 1}>
                                          <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto4"></div>
                                            <div styleName="categ">
                                                <h3>Outros</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <SiteInfo />

                    <Footer />

                </div>

            </>
        );
    }
}

export default CSSModule(Home, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })