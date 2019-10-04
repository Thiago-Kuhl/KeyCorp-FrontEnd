
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './carrinho.module.css';
import Menu from '../menu/menu.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Carrinho extends React.Component {
    render() {
        return (
            <div styleName="carrinho">
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item"  aria-current="page">Meu carrinho</li>
                    </ol>
                </div>

                <div styleName="container">
                    <div className="row">
                        <div className="col-6" styleName="col1">

                        </div>

                        <div className="col-4" styleName="col2">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModule(Carrinho, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })