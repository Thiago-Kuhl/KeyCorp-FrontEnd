import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './menu-user1.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserUsuario extends React.Component{
 render() {
     return(
        <div className="col col-lg-1" styleName="usuario">
        <div styleName="user-options">
            <FontAwesomeIcon styleName="user" icon="user-circle" />
            <ul>
                <li>
                    <p>Fulano da Silva</p>
                    <ul>
                        <li><a href="">Minha conta</a></li>
                        <li><a href="./login">Sair</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div> 
     );
 }
}

export default CSSModule(UserUsuario, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

