import React from 'react';
import CSSModule from 'react-css-modules';
import style from './favoritos.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import FavoritosFalse from './favoritosFalse';
import ProdutoGrid from '../../produto/produto-grid/produto-grid.js';
import Footer from '../../footer/footer.js';

import Cookies from 'universal-cookie';
import axios from 'axios';


class Favoritos extends React.Component {
    render() {

        const cookies = new Cookies();

        if(cookies.get('idUsuario') != undefined){
            return<>
            <Menu />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <MenuUser />
                    </div>
                    <div className="col-12">
                        <ProdutoGrid />
                    </div>
                </div>
            </div>
            <Footer />
        </>
        }

        return <FavoritosFalse/>
    }
}

export default CSSModule(Favoritos, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
