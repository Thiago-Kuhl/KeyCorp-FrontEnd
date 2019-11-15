import React from 'react';
import CSSModule from 'react-css-modules';
<<<<<<< HEAD
import style from './historico.module.css';
=======
import style from './favorites.module.css';
>>>>>>> master
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';


class Historico extends React.Component {
    render() {
<<<<<<< HEAD
        return (
            <>
                <Menu />
                <MenuUser />
                array.forEach(resumo => {
                    <Resumo />
                });
                <Footer />
            </>
        )
    }
}

// foreach still to be tested, it needs to be inside a div in the exact screen place.

class Resumo extends React.Component {
    render() {
        return (
            null
        )
    }
}

export default CSSModule(Historico, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
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
