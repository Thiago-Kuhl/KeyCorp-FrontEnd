
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">

            <header className="Home-header"></header>

            <p className="Home-intro">
            <Link to="/">Ir para home\o/</Link>
            </p>

            </div>
        );
    }
}