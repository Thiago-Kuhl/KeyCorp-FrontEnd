import React from 'react';
import CSSModule from 'react-css-modules';
import style from './produto.module.css';
import 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Redirect } from 'react-router';


class Produto extends React.Component {
    render() {
        return (
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
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CSSModule(Produto, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })