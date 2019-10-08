import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
//import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './cadastro.module.css';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import SiteInfo from '../site-info/site-info.js';
import axios from 'axios';

class Cadastro extends React.Component {
    state = {
        nome: '',
        dtNasc: '',
        cpf: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ nome: event.target.value });
        this.setState({ dtNasc: event.target.value });
        this.setState({ cpf: event.target.value });
        this.setState({ email: event.target.value });
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const signup = {
            nome: this.state.nome,
            dataNascimento: this.state.dtNasc,
            cpf: this.state.cpf,
            email: this.state.email,
            senha: this.state.password
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('http://35.237.84.170/b/signup/', { signup })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                    return error;
                }
            )
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
                        <form onSubmit={this.handleSubmit}>
                            <label> Nome Completo</label><br />
                            <input styleName='input' type="text" name="nome"></input>

                            <br />
                            <label> CPF</label><br />
                            <input styleName='input' type="text" name="cpf"></input>

                            <label> Data de Nascimento</label><br />
                            <input styleName='input' type="date" name="dtNasc"></input>
                            <br />
                            <label> E-mail</label><br />
                            <input styleName='input' type="text" name="email"></input>
                            <br />
                            <label> Senha</label><br />
                            <input styleName='input' type="password" name="password"></input>

                            <br />
                            <button type="submit" styleName='btnSignup'>Criar Conta</button>
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