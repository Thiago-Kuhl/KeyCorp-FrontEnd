
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export default class Login extends React.Component {
    render(){
        return (
            
            <div className="Login">

                <p className="Login-intro">
                    <Link to="/login"></Link>
                </p>

                <div className="fundo">

                </div>

                <form>
                <div className="container">
                    <label id="titulo">Entre em sua conta</label>

                    <label>E-mail</label>
                    <input className='input' type="text"></input>

                    <label> Senha</label>
                    <input className='input'  type="password"></input>

                    <span className="link1"><a href="#">Esqueceu sua senha?</a></span>
                    <span className="link2"><a href="#">Cadastre-se</a></span>

                    <button type="submit"  className='btnEntrar'>Entrar</button>
                </div>
                </form>
            </div>
        );
    }
}