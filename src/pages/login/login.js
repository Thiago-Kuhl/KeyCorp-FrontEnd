
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './login.module.css';
class Login extends React.Component {
    render() {
        return (

            <div styleName="bg">

            <div styleName="Login">

                <p styleName="Login-intro">
                    <Link to="/login"></Link>
                </p>

                <form>

                    <h1>Entre em sua conta</h1>
                    <br />

                    <label> E-mail</label>
                    <input styleName='input' type="text"></input>

                    <label> Senha</label>
                    <input styleName='input' type="password"></input> 

                    <span styleName="link1"><a href="#">Esqueceu sua senha?</a></span>
                    <span styleName="link2"><a href="#">Cadastre-se</a></span>
                    
                    <br/>

                    <button type="submit" styleName='btnEntrar'>Entrar</button>

                </form>
            </div>

            </div>
        );
    }
}

export default CSSModule(Login, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })