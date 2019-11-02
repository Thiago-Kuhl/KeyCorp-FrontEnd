import React from 'react';
import CSSModule from 'react-css-modules';
import style from './password.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';
import { Redirect } from 'react-router';


class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            new: '',
            new_repeat: ''
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

        const updatepw = {
            current: this.state.current,
            new: this.state.new,
            new_repeat: this.state.new_repeat
        };

        if (updatepw.new === updatepw.new_repeat) {
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.post('http://35.237.84.170/*INSERTUPDATELINK*/', updatepw.new)
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                    return alert('Senha atualizada com sucesso!')
                })
                .catch(error => {
                    if (error.response.status === 500 || error.response.status === 400) {
                        alert('Dados inválidos!')
                    }
                    return error;
                })
        } else {
            return alert('Repita a senha corretamente!')
        }
    }

    render() {
        return (
            <>
                <Menu />
                <div styleName="password">
                    <MenuUser />
                    <div styleName="update-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label> Senha Atual</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="current" styleName='input' type="password" name="current"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label> Nova Senha</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="new" styleName='input' type="password" name="new"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label> Repita a Nova Senha</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="new-_repeat" styleName='input' type="password" name="new_repeat"></input>
                                </div>
                            </div>

                            <br />
                            <button type="submit" styleName='btnUpdate'>Atualizar</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </>);
    }
}


export default CSSModule(Password, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
