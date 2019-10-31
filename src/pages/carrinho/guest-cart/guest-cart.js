import React from 'react';
import CSSModule from 'react-css-modules';
import style from './guest-cart.module.css';
import Menu from '../../menu/menu.js'
import Footer from '../../footer/footer'

class GuestCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cupom: '',
            qtd: ''
        }
    }


    render() {
        return (

            <>

                <Menu />

                <div styleName="carrinho">
                    <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meu carrinho</li>
                        </ol>
                    </div>

                <div styleName="page">
              
                </div>

                
                </div>

                <Footer />
            </>
        );
    }
}

export default CSSModule(GuestCart, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })