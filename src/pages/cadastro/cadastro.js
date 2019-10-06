
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './cadastro.module.css';

class Cadastro extends React.Component {
    render() {
        return (
            <>
                <div styleName="bg">
                    <div styleName="signup-form">
                        <form>
                            <label> Nome</label>
                            <input styleName='input' type="text"></input>

                            <label> Sobrenome</label>
                            <input styleName='input' type="text"></input>

                            <label> CPF</label>
                            <input styleName='input' type="number"></input>

                            <label> Data de Nascimento</label>
                            <input styleName='input' type="date"></input>

                            <label> E-mail</label>
                            <input styleName='input' type="text"></input>

                            <label> Senha</label>
                            <input styleName='input' type="password"></input>

                            <br />
                            <input styleName='input' type="checkbox">Quero receber ofertas por e-mail</input>
                            <br />
                            <button type="submit" styleName='btnSignup'>Criar Conta</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(Cadastro, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })