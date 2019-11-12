import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './produto1.module.css';
import 'react-bootstrap';

class ResumoPedido extends React.Component {
    render() {
        return (
            <div styleName="resumo-pedido">
                <div styleName="produto">
                    <div styleName="imagem">
                        <div styleName="foto"></div>
                    </div>

                    <div styleName="info">
                        <span styleName="titulo">
                            <h3>Ebook</h3>
                            <h3>Marketing Digital</h3>
                        </span>
                        <span styleName="subTitulo">
                            <h3>Quantidade 1 </h3>
                        </span>
                    </div>

                </div>

                <div styleName="prod-info">
                    <div styleName="wrapper1 wr">
                        <span>
                            <h3>Total:</h3>
                            <h3>Descontos:</h3>
                        </span>

                        <span styleName="span">
                            <h3>R$199,99</h3>
                            <h3>0,00%</h3>
                        </span>
                    </div>

                    <div styleName="wrapper2 wr" >
                        <span>
                            <h3>Você pagará:</h3>
                        </span>

                        <span>
                            <h3 styleName="h3">R$199,99</h3>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default CSSModule(ResumoPedido, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })