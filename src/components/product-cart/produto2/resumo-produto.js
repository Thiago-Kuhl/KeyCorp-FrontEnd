import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './produto2.module.css';

class ResumoProduto extends React.Component {
    render(){
        return <> 
            <div styleName="total">
                <p><b>Total: </b> R$400,99</p>
            </div>
        </>
    }
}

export default CSSModule(ResumoProduto, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
