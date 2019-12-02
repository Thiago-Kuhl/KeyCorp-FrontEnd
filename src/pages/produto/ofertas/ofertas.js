import React from 'react';
import 'react-bootstrap';
import CSSModule from 'react-css-modules';
import style from './ofertas.module.css';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../produto/produto.js';
import Combo2 from '../../../image/combo2.png'


var img1 = Combo2;
var img2 = Combo2;

class Ofertas extends React.Component {

    clearStorage = (event) => {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

    render() {
        return (
            <>
                <Menu />
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Ofertas do Dia</li>
                    </ol>
                </div>

                <div className="container" styleName="page">
                    {/* destaques abaixo */}
                    <div styleName="destaques">
                        <h3 styleName="heading">Destaques do dia</h3>
                        <div className="row">
                            <div className="col">
                                <img src={"https://via.placeholder.com/580x550"} alt="destaques" />
                            </div>
                            <div className="col">
                                <div className="row">
                                    <img src={"https://via.placeholder.com/266"} styleName="dImages" alt="destaques" />
                                    <img src={"https://via.placeholder.com/266"} styleName="dImages" alt="destaques" />
                                </div>
                                <div className="row">
                                    <img src={"https://via.placeholder.com/266"} styleName="dImages" alt="destaques" />
                                    <img src={"https://via.placeholder.com/266"} styleName="dImages" alt="destaques" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* combos abaixo */}
                    <div styleName="combos">
                        <h3 styleName="heading">Confira nossos combos especiais:</h3>
                        <div className="row">
                            <img src={"https://via.placeholder.com/600x200"} styleName="comboImages" alt="combos" /*width="480" height="216" href="#"*/ />
                            <img src={"https://via.placeholder.com/600x200"} styleName="comboImages" alt="combos" /*width="480" height="216" href="#"*/ />
                        </div>
                    </div>
                    {/* outras ofertas */}
                    <div styleName="outros">
                        <h3 styleName="heading">Outras ofertas:</h3>
                        <div className="row" styleName="produto">
                            <Produto />
                            <Produto />
                            <Produto />
                            <Produto />
                            <Produto />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}


export default CSSModule(Ofertas, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })