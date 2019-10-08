import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './cadastro.module.css';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import SiteInfo from '../site-info/site-info.js';
// import axios from 'axios';

class Cadastro extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Menu />
                <div styleName="signup">
                    <h1>Cadastre-se agora para aproveitar nossos preços!</h1>
                    <br /><br />
                    <h2>Já possui conta? <a href="/login">Login</a></h2>

                    <div styleName="signup-form">
                        <form>
                            <label> Nome</label><br />
                            <input styleName='input' type="text"></input>

                            <label> Sobrenome</label><br />
                            <input styleName='input' type="text"></input>
                            <br />
                            <label> CPF</label><br />
                            <input styleName='input' type="text"></input>

                            <label> Data de Nascimento</label><br />
                            <input styleName='input' type="date"></input>
                            <br />
                            <label> E-mail</label><br />
                            <input styleName='input' type="text"></input>
                            <br />
                            <label> Senha</label><br />
                            <input styleName='input' type="password"></input>

                            <br />
                            <button type="submit" styleName='btnSignup' onClick='doSignup()'>Criar Conta</button>
                        </form>
                    </div>
                </div>
                <SiteInfo />
                <Footer />
            </>
        )
    }
}

export default CSSModule(Cadastro, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })