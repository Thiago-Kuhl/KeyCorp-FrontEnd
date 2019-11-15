import React from 'react';
import CSSModule from 'react-css-modules';
import style from './produto.module.css';
import 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import { Redirect } from 'react-router';
>>>>>>> master


class Produto extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <div>
                <Card style={{ width: '15rem' }} styleName="produto">
                    <Card.Img variant="top" styleName="img" src="https://image.freepik.com/free-vector/pack-colorful-square-emoticons_23-2147589525.jpg" />
                    <Card.Body>
                        <Card.Title styleName="text title">E-Book Marketing Digital</Card.Title>
                        <div className="row">
                            <div className="col-6 pt-2">
                                <Card.Text styleName="text">R$123.90</Card.Text>
                            </div>
                            <div className="col-6">
                                <Button styleName="btn text" href="#"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>
                            </div>
                        </div>
=======
            <div className="produto">
                <Card style={{ width: '18rem' }} className="produto">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>E-Book Marketing Digital</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link styleName="nolink" href="#">R$123.90</Card.Link>
                        <Card.Link className="btn" href="#">Adicionar</Card.Link>
>>>>>>> master
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CSSModule(Produto, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })