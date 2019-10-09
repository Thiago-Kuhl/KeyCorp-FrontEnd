import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './processamento.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';

class Processamento extends React.Component {
    render() {
        return (<>
            <Menu />
            <div styleName="processamento">
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item"><a href="./carrinho">Carrinho</a></li>
                        <li className="breadcrumb-item" aria-current="page">Finalizar pedido</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </>);
    }
}


export default CSSModule(Processamento, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })