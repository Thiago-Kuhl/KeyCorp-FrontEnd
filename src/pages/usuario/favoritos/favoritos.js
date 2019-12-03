import React from 'react';
import CSSModule from 'react-css-modules';
import style from './favoritos.module.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import FavoritosFalse from './favoritosFalse';
import Footer from '../../footer/footer.js';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();

var idUser = cookies.get('idUsuario');



     
class Favoritos extends React.Component {

   
    show = () => {

      

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.84.170/get/favorites/' + idUser) 
            .then(res => {

                var view = "\n";
                //Lógica para percorrer produtos
                var resposta = res.data;

                 for (var i in resposta) {

                    resposta[i] = res.data[i];  

                    console.log(resposta[i].idProduto);

                    const deleteFavorite = () => {          
                        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
                        axios.get('http://35.237.84.170/remove/favorite/' + idUser) 
                        .then(res => {
                    
                        })  
                        .catch(error => {
                            return error;
                        }
                        )   
                    }

                     view +=  ' <div id="favorito"><div id="prod-favorite"><p> Aqui vai o titulo ' + resposta[i].idProduto + '</p><a><button onClick={'+deleteFavorite()+'} id="btn-favorite" value='+ resposta[i].idProduto+'>Remover</button><a><span><h3>Descrição</h3><h3>Valor: R$</h3></span></div></div>';    
                }
                view += "\n";

                document.getElementById('show').innerHTML = view;         
            })
            .catch(error => {
                return error;
            }
            )
    }

    render() {

        if (cookies.get('idUsuario') !== undefined) {

            return <>

                <Menu />

                <div styleName="page" onLoad={this.show()}>

                    <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meus Favoritos</li>
                        </ol>
                    </div>

                    <div styleName="menu-user">
                            <MenuUser />
                    </div>

                    <div styleName="produto">

                        <div id="show" className="show">
                        </div>
                    </div>

                </div>

                <Footer />

            </>
        }

        return <FavoritosFalse />
    }
}

export default CSSModule(Favoritos, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
