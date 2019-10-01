
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './home.module.css';

//import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component {
    render() {
        return (
            <>
                <div styleName="Home">

                    <header styleName="Home-header"></header>

                    <p styleName="Home-intro">
                        <Link to="/">Ir para home\o/</Link>
                    </p>

                </div>
            </>
        );
    }
}

export default CSSModule(Home, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })