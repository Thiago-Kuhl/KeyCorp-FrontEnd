import React from 'react';
import CSSModule from 'react-css-modules';
import style from './account.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';


class Account extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <div styleName="account">
                    <MenuUser />
                    <div styleName="update-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label> Nome Completo</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="nome" styleName='input' type="text" name="nome"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <label> CPF</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="cpf" styleName='input' type="text" name="cpf"></input>
                                </div>
                                <div className="col-6">
                                    <label> Data de Nascimento</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="dtNasc" styleName='input' type="date" name="dtNasc"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label> E-mail</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="email" styleName='input' type="text" name="email"></input>
                                </div>
                            </div>

                            <br />
                            <button type="submit" styleName='btnUpdate'>Atualizar</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}


export default CSSModule(Account, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
