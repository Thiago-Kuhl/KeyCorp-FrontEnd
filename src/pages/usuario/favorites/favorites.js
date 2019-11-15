import React from 'react';
import CSSModule from 'react-css-modules';
import style from './favorites.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
<<<<<<< HEAD
// import ProdutoGrid from '../../produto/produto-grid/produto-grid.js';
=======
>>>>>>> master
import Footer from '../../footer/footer.js';
import axios from 'axios';
import { Redirect } from 'react-router';


class Favorites extends React.Component {
    render() {
<<<<<<< HEAD
        return (
            <>
                <Menu />
                <div styleName="container" className="row">
                    <div className="col-12">
                        {/* <ProdutoGrid /> */}
                    </div>
                    <div className="col-12">
                        <MenuUser />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default CSSModule(Favorites, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
=======
    return (
        <>
        <Menu />
        <MenuUser />
        <Footer />
        </>
    )}
}
>>>>>>> master
