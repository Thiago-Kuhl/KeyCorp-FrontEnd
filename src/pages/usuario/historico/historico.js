import React from 'react';
import CSSModule from 'react-css-modules';
import style from './historico.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';


class Historico extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <MenuUser />
                <div className="container" styleName="historico">
                    <div className="row">
                        <div className="col-6">
                            <h4># do Pedido</h4>
                        </div>
                        <div className="col-6">
                            <h4>Produtos</h4>
                        </div>
                        <div className="col-6">
                            <h4>Valor Total</h4>
                        </div>
                    </div>
                    array.forEach(resumo => {
                        <Resumo />
                    });
                </div>
                <Footer />
            </>
        )
    }
}

// foreach still to be tested, it needs to be inside a div in the exact screen place.

class Resumo extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <p># do Pedido</p>
                </div>
                <div className="col-6">
                    <p>Produtos</p>
                </div>
                <div className="col-6">
                    <p>Valor Total</p>
                </div>
            </div>
        )
    }
}

export default CSSModule(Historico, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
