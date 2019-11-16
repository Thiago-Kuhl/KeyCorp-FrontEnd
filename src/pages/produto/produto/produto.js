import React from 'react';
import CSSModule from 'react-css-modules';
import style from './produto.module.css';
import 'react-bootstrap';
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
           titulo : 'dsbhaalkmç'
        }
    }


    render() {
        return <> 
        <Menu/>
            <div>
                <Card style={{ width: '15rem' }} styleName="produto">
                    <Card.Img variant="top" styleName="img" src="https://image.freepik.com/free-vector/pack-colorful-square-emoticons_23-2147589525.jpg" />
                    <Card.Body>
                        <Card.Title id="titulo" name="titulo" styleName="text title">{localStorage.getItem('itens')}</Card.Title>
                        <div className="row">
                            <div className="col-6 pt-2">
                                <Card.Text styleName="text">R$123.90</Card.Text>
                            </div>
                            <div className="col-6">
                                <Button styleName="btn text" href="#"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    }
}

export default CSSModule(Produto, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })