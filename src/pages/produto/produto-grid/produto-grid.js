import React from 'react';
import CSSModule from 'react-css-modules';
import style from './produto-grid.module.css';
import 'react-bootstrap';
import Produto from '../../produto/produto/produto.js';
import axios from 'axios';


class ProdutoGrid extends React.Component {
    render() {
        return (
            <>
                <div styleName="produtos">
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(ProdutoGrid, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })