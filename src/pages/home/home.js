
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import './home.css';



export default class Header extends React.Component {
    render() {
        return (
            <div className="header">

            </div>
        );
    }
}

export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">

            </div>
        );
    }
}
export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="Home">

                    <header className="Home-header"></header>

                    <p className="Home-intro">
                        <Link to="/">Ir para home\o/</Link>
                    </p>

                </div>
                <Footer />
            </>
        );
    }
}