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
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Cookies from 'universal-cookie';
import axios from 'axios';

class Favoritos extends React.Component {
    show = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.84.170/login/') //Arrumar a API, essa é so exemplo
            .then(res =>  {
                const cookies = new Cookies();

                var view = "\n";
                //Lógica para percorrer produtos
                var resposta;
                
                if(resposta.idUsuario == cookies.get('idUsuario')){ //Arrumar a validação do usuário

                    for(let i = 0; i < res.data.length; i++){
                         resposta[i] = res.data[i] 
                        view += <div>
                        <Card style={{ width: '15rem' }} styleName="produto">
                            <Card.Img variant="top" styleName="img" src="https://image.freepik.com/free-vector/pack-colorful-square-emoticons_23-2147589525.jpg" />
                            <Card.Body>
                                <Card.Title id="titulo" name="titulo" styleName="text title">{resposta[i].nomeProduto}</Card.Title>
                                <div className="row">
                                    <div className="col-6 pt-2">
                                        <Card.Text styleName="text">{resposta[i].valorBase}</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Link to="./pedido">
                                        <Button styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>;
                       
                    console.log(resposta[i]);
                        
                    } 

                    view += "\n";
                }else {
                    return <div>
                        <p>Você ainda não tem favoritos salvos</p>
                    </div>
                }
            })
            .catch(error => {
                return error;
            }
            )
    }

    render() {

        const cookies = new Cookies();

        if(cookies.get('idUsuario') != undefined){

            return <>

            <Menu />

            <div styleName="page">

                <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meus Favoritos</li>
                        </ol>
                </div>

                <div styleName="row">
         
                <div styleName="menu-user">
                    <MenuUser />
                </div>

                <div styleName= "produto">
                    <div>
                       {this.show()}
                    </div>
                    
                </div>
            
                    
                </div>

            </div>
            
            <Footer />
        </>
        }

        return <FavoritosFalse/>
    }
}

export default CSSModule(Favoritos, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
