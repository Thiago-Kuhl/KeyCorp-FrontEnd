
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export default class Login extends React.Component {
    render(){
        return (
            
            <div className="Login">

            <header className="Login-header"></header>

                <p className="Login-intro">
                    <Link to="/login"></Link>
                </p>

                <div className="forme">
                    <form>
                    <label className="nmForm">Entre em sua conta</label>
                    <span className="nmSpan">E-mail</span>
                    <input className='input1 pdr' type="text"></input>
                    <span className="nmSpan pdr">Senha</span>
                    <input className='input2' type="password"></input>
                    <span className="link1"><a href="#">Esqueceu sua senha?</a></span>
                    <span className="link2"><a href="#">Cadastre-se</a></span>
                    <button className='btnEntrar'>Entrar</button>
                    </form>
                </div>
            </div>
        );
    }
}