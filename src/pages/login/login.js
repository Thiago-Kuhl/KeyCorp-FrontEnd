
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './login.module.css';
class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            dtNasc: '',
            cpf: '',
            email: '',
            password: ''
        }
    }
    

    handleChange = (event) => {
        console.log("id",event.target.name)

        const state = Object.assign({}, this.state);

        let field = event.target.name;
        
        state[field] = event.target.value

        this.setState(state)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const signup = {
            nome: this.state.nome,
            dataNascimento: this.state.dtNasc,
            cpf: this.state.cpf,
            email: this.state.email,
            senha: this.state.password
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.84.170/signup/',  signup )
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