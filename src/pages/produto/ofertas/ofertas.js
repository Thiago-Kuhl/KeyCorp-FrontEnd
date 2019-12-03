import React from 'react';
import 'react-bootstrap';
import axios from 'axios';
import CSSModule from 'react-css-modules';
import style from './ofertas.module.css';
import { Link } from 'react-router-dom';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Combo2 from '../../../image/combo2.png'
import Combo from '../../../image/combo.png'
import Postman from '../../../image/postman2.png'
import VisualStudio from '../../../image/studio.png'
import Sublime from '../../../image/sublime.png'
import pbi from '../../../image/pbi.jpg'
import Figma from '../../../image/figma.png'
import escritorio from '../../../image/escritorio.png'
import oracle from '../../../image/oracle.jpg'
import photoshopEnterprise from '../../../image/photoshop.png'
import photoshopEducation from '../../../image/photoshop.png'
import vscode2 from '../../../image/vscode2.png'

var img1 = Combo2;
var img2 = Combo;
var postman = Postman;
var sublime = Sublime;
var vs = VisualStudio;
var powerbi = pbi;
var figma = Figma;

class Ofertas extends React.Component {
    show = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.149.227/search/products')
            .then(res => {
                var view, titulo, valor, img;
                //Lógica para percorrer produtos
                var resposta = res.data;
                for (var i in resposta) {
                    resposta[i] = res.data[i];
                    console.log(resposta[i]);
                    titulo = resposta[i].nomeProduto;
                    valor = resposta[i].valorBase;

                    switch (titulo) {
                        case "Oracle Database 18c - Enterprise Edition":
                            img = oracle;
                            break;
                        case "Visual Studio Code":
                            img = vscode2;
                            break;
                        case "Photoshop - Enterprise Edition":
                            img = photoshopEnterprise;
                            break;
                        case "Photoshop - Education Edition":
                            img = photoshopEducation;
                            break;
                        case "Office 365 - Home Edition":
                            img = escritorio;
                            break;
                        case 'SQL Server Database 2017- Enterprise Edition':
                            img = escritorio;
                            break;
                        case 'Adobe Creative Cloud - 1 Year':
                            img = escritorio;
                            break;
                        case 'Intellij Idea - Ultimate':
                            img = escritorio;
                            break;
                        case 'Visual Studio - Professional Edition':
                            img = escritorio;
                            break;
                        case 'Bizagi Studio - Professional Edition':
                            img = escritorio;
                            break;
                        case 'Microsoft Visio Professional 2019':
                            img = escritorio;
                            break;
                        default:
                            break;
                    }

                    if (i < 5) {
                        view += '<Card styleName="card">'
                            + '<Card.Img variant="top" id="img" styleName="img" src={' + img + '} />'
                            + '<Card.Body>'
                            + '<Card.Title id="titulo" name="titulo" styleName="text title">' + titulo + '</Card.Title>'
                            + '<div className = "row">'
                            + '<div className="col-6 pt-2">'
                            + '<Card.Text styleName="text">R$' + valor + '</Card.Text>'
                            + '</div>'
                            + '<div className="col-6">'
                            + '< Link to = "./pedido" >'
                            + '<Button styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>'
                            + '</Link >'
                            + '</div>'
                            + '</div>'
                            + '</Card.Body>'
                            + '</Card> \n'
                    }
                }

                document.getElementById('show').innerHTML = view;
            })
            .catch(error => {
                return error;
            })
    }

    render() {
        return (
            <>
                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Ofertas do Dia</li>
                    </ol>
                </div>

                <div className="container" styleName="page" onLoad={this.show()}>
                    {/* destaques abaixo */}
                    <div styleName="destaques">
                        <h3 styleName="heading">Destaques do dia</h3>
                        <div className="row">
                            <div className="col">
                                <a href="#"><img src={vs} styleName="dImages" alt="destaques" width="580" height="550" /></a>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <a href="#"><img src={sublime} styleName="dImages" alt="destaques" width="268" height="268" href="#" /></a>
                                    <a href="#"><img src={powerbi} styleName="dImages" alt="destaques" width="268" height="268" href="#" /></a>
                                </div>
                                <div className="row">
                                    <a href="#"><img src={postman} styleName="dImages" alt="destaques" width="268" height="268" href="#" /></a>
                                    <a href="#"><img src={figma} styleName="dImages" alt="destaques" width="268" height="268" href="#" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* combos abaixo */}
                    <div styleName="combos">
                        <h3 styleName="heading">Confira nossos combos especiais:</h3>
                        <div className="row">
                            <a href="#"><img src={img1} styleName="comboImages" alt="combos" width="600" height="265" /></a>
                            <a href="#"><img src={img2} styleName="comboImages" alt="combos" width="600" height="265" /></a>
                        </div>
                    </div>
                    {/* outras ofertas */}
                    <div styleName="outros">
                        <h3 styleName="heading">Outras ofertas:</h3>
                        <div className="row" styleName="produto">
                            <div id="show" className="show">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default CSSModule(Ofertas, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })