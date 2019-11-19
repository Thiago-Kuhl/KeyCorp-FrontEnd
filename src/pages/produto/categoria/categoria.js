import React from 'react';
import CSSModule from 'react-css-modules';
import style from './categoria.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Filtro from '../filtro-categoria/filtro.js';
import ProdutoGrid from '../produto-grid/produto-grid.js';
import axios from 'axios';


class Categoria extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Filtro />
                        </div>
                        <div className="col-12">
                            <ProdutoGrid />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default CSSModule(Categoria, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })