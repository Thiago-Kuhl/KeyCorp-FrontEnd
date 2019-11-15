import React from 'react';
import CSSModule from 'react-css-modules';
import style from './detalhes.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';
import { Redirect } from 'react-router';


class Detalhes extends React.Component {
    render() {
    return (
        <>
        <Menu />
        <Footer />
        </>
    )}
}

<<<<<<< HEAD
// make whole pg and render product

=======
>>>>>>> master
export default CSSModule(Detalhes, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })