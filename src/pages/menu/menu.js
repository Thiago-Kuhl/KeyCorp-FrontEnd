
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './menu.module.css';
import Usuario from '../menu/usuario/usuario'
import Logo from '../../external-components/logo/logo'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Produto from '../produto/produto/produto'
import NotFoundProduct from '../../components/search/search'


class Menu extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
           search : ''
        }
    }

    handleChange = (event) => {
        console.log("id", event.target.name)

        const state = Object.assign({}, this.state);

        let field = event.target.name;

        state[field] = event.target.value

        this.setState(state)
    }

    // search(){
    //     var lista = [];

    // }

    
    handleSubmit = (event) => {
        event.preventDefault();

        const produto = document.getElementById("search").value; 
        
        console.log("haahahahah" + produto);

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.84.170/search/product/' + produto)
            .then(res =>  {
                // const cookies = new Cookies();
                console.log(res.status);

                if(res.status === '204'){
                    console.log("Renderiza página de NOT FOUND");
                    return <NotFoundProduct/>
                }
                else if(res.status === 200){
                    console.log("Renderiza página de produtos");

                    const resposta = res.data;

                    localStorage.setItem('itens', resposta);
                    console.log(Produto.state);
                    return window.location.href="http://localhost:3000/produto";

                }
                else {
                    console.log("Renderiza 404");
                    
                }
                
                // console.log("aqui");
                
                // //trás a resposta baseado na posição do indice   const resposta = res.data[];
                // console.log(resposta[0].idProduto);
                
                // for(let i = 0; i < resposta.length; i++){
                       
                // }                
                // Pega o que tiver no indice X --- console.log(resposta[0].idProduto);

            
            })
            .catch(error => {
                return error;
            }
            )
            
           
    }

    render() {
        return (
            <div styleName="hearder">
                <div styleName="container">
                    <div className="row">



                    <div styleName="titulo">
                        <Link to="./">
                        <p>KEY CORP</p>
                        </Link>
                    </div>

                        <div className="col-md-7" styleName="navegacao">
                            <div className="row" styleName="barra">
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={(event) => this.handleChange(event)} id="search" name="search" placeholder="Pesquise aqui..." type="t"/>
                                {/* <button type="submit" styleName="searchButton"> */}
                                  {/* <i></i> */}
                                 {/* </button> */}
                            </form>
                            </div>

                            <div className="row" styleName="produto">

                                <div styleName="prod-options">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon styleName="icon1" icon="chevron-down" />
                                            <a href="">Categorias</a>
                                            <ul styleName="ul">
                                                <li><a href="">Exclusivos</a></li>
                                                <li><a href="">Escola</a></li>
                                                <li><a href="">Criatividade</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            {/* <FontAwesomeIcon styleName="icon1" icon="chevron-down" /> */}
                                            <a href="">Ofertas</a>
                                            {/* <ul>
                                                <li><a href="">Office</a></li>
                                                <li><a href="">IDEs</a></li>
                                                <li><a href="">Design</a></li>
                                            </ul> */}
                                        </li>

                                        <li><a href="">Saiba mais</a></li>

                                        <li><a href="./contato">Contato</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Usuario />

                        <div className="col col-lg-2" styleName="atalhos">
                            <div styleName="icons">
                                {/* <span>
                                    <div>
                                        <Link to="./historico">
                                            <FontAwesomeIcon styleName="icon" icon="bell" />
                                        </Link>
                                    </div>
                                </span> */}

                                {/* <span>
                                    <Link to="./carrinho">
                                        <FontAwesomeIcon styleName="icon" icon="shopping-cart" />
                                    </Link>
                                </span> */}

                                <span styleName="text" >
                                    <Link to="/favoritos">
                                        <FontAwesomeIcon styleName="icon" icon="heart" /> 
                                        Favoritos
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }

}

export default CSSModule(Menu, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })