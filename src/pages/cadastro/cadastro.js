import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './cadastro.module.css';
import Menu from '../menu/menu.js'
import SiteInfo from '../site-info/site-info.js'

class Cadastro extends React.Component {
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
                            <label> Nome</label>
                            <input styleName='input' type="text"></input>

                            <label> Sobrenome</label>
                            <input styleName='input' type="text"></input>

                            <label> CPF</label>
                            <input styleName='input' type="text"></input>

                            <label> Data de Nascimento</label>
                            <input styleName='input' type="date"></input>

                            <label> E-mail</label>
                            <input styleName='input' type="text"></input>

                            <label> Senha</label>
                            <input styleName='input' type="password"></input>

                            <br />
                            <button type="submit" styleName='btnSignup'>Criar Conta</button>
                        </form>
                    </div>
                </div>
                <SiteInfo />
            </>
        )
    }
}

export default CSSModule(Cadastro, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })