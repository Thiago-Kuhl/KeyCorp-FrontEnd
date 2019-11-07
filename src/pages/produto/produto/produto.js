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
            <div className="col-3">
                <div styleName="bloco">
                    <div styleName="img img-prod1">
                    </div>
                    <span>
                        <h3>Office 365</h3>
                    </span>
                    <div styleName="desc">
                        <h3>Aplicativos para escritório</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModule(Produto, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })