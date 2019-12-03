import React from 'react';
import CSSModule from 'react-css-modules';
import style from './produto.module.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu from '../../menu/menu'


const teste = 'lellelele'
function testeProdutos(itens) {

    return itens

}

class Produto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: 'dsbhaalkmç'
        }
    }


    render() {
        var img;
        return (
            <>
                <div>
                    <Card style={{ width: '15rem' }} styleName="produto">
                        <Card.Img variant="top" id="img" styleName="img" src={img} />
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
            </>
        )
    }
}

export default CSSModule(Produto, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })