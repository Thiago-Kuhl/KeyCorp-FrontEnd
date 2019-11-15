import React from 'react';
import CSSModule from 'react-css-modules';
import style from './menu-user1.module.css';
import Cookies from 'universal-cookie';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserUsuario extends React.Component{
 render() {
    const cookies = new Cookies();

     return(
        <div className="col col-lg-1" styleName="usuario">
        <div styleName="user-options">
            <FontAwesomeIcon styleName="user" icon="user-circle" />
            <ul>
                <li>
                    <p>{cookies.get('nome')}</p>
                    <ul>
<<<<<<< HEAD
                        <li><a href="./account">Minha conta</a></li>
=======
                        <li><a href="">Minha conta</a></li>
>>>>>>> master
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

