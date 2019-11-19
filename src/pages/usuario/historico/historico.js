import React from 'react';
import CSSModule from 'react-css-modules';
import style from './historico.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';


class Historico extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <MenuUser />
                <table styleName="historico">
                    <tr>
                        <td>
                            <h4># do Pedido</h4>
                        </td>
                        <td>
                            <h4>Produtos</h4>
                        </td>
                        <td>
                            <h4>Valor Total</h4>
                        </td>
                    </tr>
                    <Resumo />
                </table>
                <Footer />
            </>
        )
    }
}

// foreach still to be tested, it needs to be inside a div in the exact screen place.

class Resumo extends React.Component {
    
    createRow = () => {
        let table = []
        let children = []
        // Outer loop to create parent (this case, children)
        for (let i = 0; i < 3; i++) {
            children.push(<td>{`Column ${i + 1}`}</td>)
            children.push(<td>{`${this.produtos}`}</td>)
            children.push(<td>{`${this.vlr}`}</td>)
            children.push(<td>{`${this.nro}`}</td>)
            //Create the parent and add the children
            table.push({ children })
        }
        return table
    }

    render() {
        return (
            <tr>{this.createRow()}</tr>
        )
    }
}

export default CSSModule(Historico, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
