import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './resumo.module.css';
import 'react-bootstrap';

import imagem from '../../produto/detalhes/detalhes'
import escritorio from '../../../image/escritorio.png'
import postman from '../../../image/postman.png'

var img;
export var desconto = 0.10; //Exemplo
var valor = sessionStorage.getItem('valor');
var valorFinal =  valor -= valor * desconto;
class Resumo extends React.Component {
    
    render() {
        var produto = sessionStorage.getItem("id");

        switch(produto){
            case "0":
                img = postman;
                break;
            case "1":
                img = escritorio;
                break;
            case "2":
                img = "";
                break;
            case "4":
                img = "";
                break;
            case "5":
                img ="";
                break;
        }

        return (
            <div styleName="resumo-pedido">
                <div styleName="produto">
                    <div styleName="imagem">
                       <div styleName="foto">
                       <img src={img} alt="some text"  width="100" height="100"/>
                       </div>
                 
                        
                    </div>

                    <div styleName="info">
                        <span styleName="titulo">
                            <h3>{sessionStorage.getItem('titulo')}</h3>
                            <h3>{sessionStorage.getItem('descricao')}</h3>
                        </span>
                        <span styleName="subTitulo">
                            {/* <h3>Quantidade 1 </h3> */}
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
                            <h3>R${sessionStorage.getItem('valor')}</h3>
                            <h3>{desconto}%</h3>
                        </span>
                    </div>
                    <div styleName="wrapper2 wr" >
                        <span>
                            <h3>Você pagará:</h3>
                        </span>

                        <span>
                            <h3 styleName="h3">R${valorFinal}</h3>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default CSSModule(Resumo, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })