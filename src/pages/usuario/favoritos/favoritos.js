import React from 'react';
import CSSModule from 'react-css-modules';
import style from './favoritos.module.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import FavoritosFalse from './favoritosFalse';
import Footer from '../../footer/footer.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Cookies from 'universal-cookie';
import axios from 'axios';

var produto;

class Favoritos extends React.Component {

    salvarFavorito = (event) => {

        produto =  <div>
                <Card style={{ width: '15rem' }} styleName="produto">
                    <Card.Img variant="top" styleName="img" src="https://image.freepik.com/free-vector/pack-colorful-square-emoticons_23-2147589525.jpg" />
                    <Card.Body>
                        <Card.Title id="titulo" name="titulo" styleName="text title">{sessionStorage.getItem('titulo')}</Card.Title>
                        <div className="row">
                            <div className="col-6 pt-2">
                                <Card.Text styleName="text">R${sessionStorage.getItem('valor')}</Card.Text>
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
         ;


    }


    render() {

        const cookies = new Cookies();

        if(cookies.get('idUsuario') != undefined){

            return <>

            <Menu />

            <div styleName="page">

                <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meus Favoritos</li>
                        </ol>
                </div>

                <div styleName="row">
         
                <div styleName="menu-user">
                    <MenuUser />
                </div>

                <div styleName= "produto">
                     {produto}
                </div>
            
                    
                </div>

            </div>
            
            <Footer />
        </>
        }

        return <FavoritosFalse/>
    }
}

export default CSSModule(Favoritos, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
