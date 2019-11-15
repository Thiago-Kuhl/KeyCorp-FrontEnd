import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './produto1.module.css';


class Produto1 extends React.Component {
    render(){
        return <> 
         <div styleName="prod" id="produto">

            <div styleName="img"></div>

            <div styleName="info-car">
            <a href="">
                <h3>Ebook Marketing Digital</h3>
            </a>

            <p>Ações de comunicação que as empresas podem utilizar por meio da internet</p>
             </div>

            {/* <input id="qtd" styleName="inpt" placeholder="1" type="number" min="1" max=""></input> */}

        </div>
        </>
    }
}

export default CSSModule(Produto1, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
