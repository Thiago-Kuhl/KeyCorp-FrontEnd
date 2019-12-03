import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './categoria.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Filtro from '../filtro-categoria/filtro.js';
import Produto from '../produto/produto.js';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import escritorio from '../../../image/escritorio.png'
import oracle from '../../../image/oracle.jpg'
import photoshopEnterprise from '../../../image/photoshop.png'
import photoshopEducation from '../../../image/photoshop.png'
import vscode2 from '../../../image/vscode2.png'



class Categoria extends React.Component {
    // show = () => {
    //     axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    //     axios.get('http://35.237.149.227/search/products')
    //         .then(res => {
    //             var view, titulo, valor, img;
    //             //Lógica para percorrer produtos
    //             var resposta = res.data;
    //             for (var i in resposta) {
    //                 resposta[i] = res.data[i];
    //                 console.log(resposta[i]);
    //                 ProdutoCat.titulo = resposta[i].nomeProduto;
    //                 ProdutoCat.valor = resposta[i].valorBase;

    //                 switch (titulo) {
    //                     case "Oracle Database 18c - Enterprise Edition":
    //                         img = oracle;
    //                         break;
    //                     case "Visual Studio Code":
    //                         img = vscode2;
    //                         break;
    //                     case "Photoshop - Enterprise Edition":
    //                         img = photoshopEnterprise;
    //                         break;
    //                     case "Photoshop - Education Edition":
    //                         img = photoshopEducation;
    //                         break;
    //                     case "Office 365 - Home Edition":
    //                         img = escritorio;
    //                         break;
    //                     case 'SQL Server Database 2017- Enterprise Edition':
    //                         img = escritorio;
    //                         break;
    //                     case 'Adobe Creative Cloud - 1 Year':
    //                         img = escritorio;
    //                         break;
    //                     case 'Intellij Idea - Ultimate':
    //                         img = escritorio;
    //                         break;
    //                     case 'Visual Studio - Professional Edition':
    //                         img = escritorio;
    //                         break;
    //                     case 'Bizagi Studio - Professional Edition':
    //                         img = escritorio;
    //                         break;
    //                     case 'Microsoft Visio Professional 2019':
    //                         img = escritorio;
    //                         break;
    //                     default:
    //                         break;
    //                 }

    //                 ProdutoCat.img = img;

    //                 if (i === 3 || i === 6) {
    //                     view += '</div><div className="row">'
    //                 }

    //                 while (i < 9) {
    //                     view += '<ProdutoCat /> \n'
    //                 }
    //             }
    //             document.getElementById('show').innerHTML = view;
    //         })
    //         .catch(error => {
    //             return error;
    //         })
    // }

    render() {
        return (
            <>
                <Menu />
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Produtos</li>
                    </ol>
                </div>

                <div className="container" styleName="page" onLoad={this.show()}>
                    <div className="row">
                        <div className="col-12">
                            <Filtro />
                        </div>
                        <div className="col-12" styleName="grid-fix">
                            <div styleName="produtos">
                                <h3 styleName="heading">Produtos</h3>
                                <div className="row">
                                    <div id="show" className="show">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

class ProdutoCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            valor: '',
            img: ''
        }
    }


    render() {
        return (
            <>
                <div>
                    <Card style={{ width: '15rem' }} styleName="produto">
                        <Card.Img variant="top" id="img" styleName="img" src={this.img} />
                        <Card.Body>
                            <Card.Title id="titulo" name="titulo" styleName="text title">{this.titulo}</Card.Title>
                            <div className="row">
                                <div className="col-6 pt-2">
                                        <Card.Text styleName="text">R${this.valor}</Card.Text>
                                </div>
                                <div className="col-6">
                                    <Link to="./pedido">
                                        <Button styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}

export default CSSModule(Categoria, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })