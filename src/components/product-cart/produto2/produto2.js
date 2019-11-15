import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './produto2.module.css';

class Produto2 extends React.Component {
    render(){
        return <> 
         <div styleName="prod" id="produto">

            <div styleName="img"></div>

            <div styleName="info-car">
            <a href="">
                <h3>IntelliJ IDEA </h3>
            </a>

            <p>Ambiente de desenvolvimento integrado escrito em Java para o desenvolvimento de software de computador</p>
             </div>

            {/* <input id="qtd" styleName="inpt" placeholder="1" type="number" min="1" max=""></input> */}

        </div>
        </>
    }
}

export default CSSModule(Produto2, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
