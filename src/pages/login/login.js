import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './login.module.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = (event) => {
        console.log("id", event.target.name)

        const state = Object.assign({}, this.state);

        let field = event.target.name;

        state[field] = event.target.value

        this.setState(state)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const login = {
            email: this.state.email,
            senha: this.state.password
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.84.170/login/', login)
            .then(res => {
                console.log(res);
                console.log(res.data.idUsuario);

            })
            .catch(error => {
                return error;
            }
            )
    }

    render() {
        console.log(this.state)
        return (


            <div styleName="bg">

                <div styleName="Login">

                    <p styleName="Login-intro">
                        <Link to="/login"></Link>
                    </p>

                    <form onSubmit={this.handleSubmit}>

                        <h1>Entre em sua conta</h1>
                        <br />

                        <label> E-mail</label>
                        <input onChange={(event) => this.handleChange(event)} id="email" styleName='input' type="text" name="email"></input>

                        <label> Senha</label>
                        <input onChange={(event) => this.handleChange(event)} id="password" styleName='input' type="password" name="password"></input>

                        <span><a href="">Esqueceu sua senha?</a></span>
                        <span><a href="./cadastro">Cadastre-se</a></span>

                        <br />

                        <button type="submit" styleName='btnEntrar'>Entrar</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default CSSModule(Login, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })