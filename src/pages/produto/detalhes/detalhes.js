import React from 'react';
import CSSModule from 'react-css-modules';
import style from './detalhes.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../../produto/produto/produto.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'universal-cookie';

import escritorio from '../../../image/escritorio.png'
import postman from '../../../image/postman.png'
import oracle from '../../../image/oracle.jpg'
import photoshopEnterprise from '../../../image/photoshop.png'
import photoshopEducation from '../../../image/photoshop.png'
import vscode from '../../../image/vscode.png'


var img;


class Detalhes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: '',
            idProduto: '',
        }
    }
    
    salvarFavorito = (event) => {

        const cookies = new Cookies();

        const favorito = {
            idUsuario: cookies.get('idUsuario'),
            idProduto: sessionStorage.getItem("id")
        };
    
        //Arrumar as APIS 

        // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        // axios.post('http://35.237.84.170/signup/', favorito)
        //     .then(res => {
        //         console.log(res)
        //         console.log(res.data)
        //         axios.post('http://35.237.84.170/login/', { "idUsuario" : favorito.Usuario, "idProduto": favorito.idProduto }).then(res => {
                  
        //         })
        //     })
        //     .catch(error => {
        //         if (error.response.status === 409) {
        //             alert('Favorito já cadastrado!');
        //         }
        //         if (error.response.status === 500 || error.response.status === 400) {
        //             alert('Dados inválidos!');
        //         }
        //         return error;
        //     }

        // )
    }

    render() {

        var produto = sessionStorage.getItem("id");

        switch(produto){
            case "0":
                img = oracle;
                break;
            case "1":
                img = vscode;
                break;
            case "2":
                img = photoshopEnterprise;
                break;
            case "3":
                img = photoshopEducation;
                break;
            case "4":
                img = escritorio;
                break;
        }
        

        return (
            <>
                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Meus favoritos</li>
                        <li className="breadcrumb-item" aria-current="page">{sessionStorage.getItem("titulo")}</li>
                    </ol>
                </div>

                <div className="container" styleName="detalhes">
                    <div className="produto">
                        <div className="row">
                            <div styleName="imgProduct">
                            <img src={img} alt="some text" width="420" height="350"/>
                            </div>
                        </div>

                        <div styleName="info">
                                <h1 styleName="title">{sessionStorage.getItem("titulo")}</h1>
                                <div styleName="rating"></div>
                                <h1 styleName="valor-original">Preço: R${sessionStorage.getItem("valor")}</h1>
                        </div>

                        <div styleName="buttom">
                               <Button onClick={this.salvarFavorito} styleName="btn1 text"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar aos Favoritos</Button> &nbsp;

                            <Link  to="./pedido">
                                <Button styleName="btn2 text"><FontAwesomeIcon icon="fa-shopping-cart" /> Comprar</Button>
                            </Link>
                       </div>
                    </div>
                    <div className="row">
                        <div styleName="descricao">
                            <h3 styleName="desc-title">Detalhes do Produto</h3>
                            <p styleName="desc-text">{sessionStorage.getItem("descricao")}</p>
                        </div>
                    </div>
                </div>
                {/* <Similares /> */}
                <Footer />
            </>
        )
    }
}

class Similares extends React.Component {
    render() {
        return (
            <>
                <div styleName="produtos">
                    <div className="row">
                        <Produto />
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(Detalhes, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })