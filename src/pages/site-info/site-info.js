import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './site-info.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SiteInfo extends React.Component {
    render() {
        return (
            <>
                <section styleName="site-info">
                    <div className="container">
                        <div styleName="info-slide">
                            <div styleName="img-container">
                                <FontAwesomeIcon styleName="icon" icon="credit-card" />
                            </div>

                            <h1>Formas de pagamento</h1>
                            <p>Diversas formas de pagamento incluindo a licença estudantil</p>
                        </div>

                        <div styleName="info-slide">
                            <div styleName="img-container">
                                <FontAwesomeIcon styleName="icon" icon="check-double" />
                            </div>

                            <h1>Entrega na hora</h1>
                            <p>Entrega do produto imediata ao pagamento </p>
                        </div>

                        <div styleName="info-slide">
                            <div styleName="img-container">
                                <FontAwesomeIcon styleName="icon" icon="shield-alt" />
                            </div>

                            <h1>Segurança, do início ao fim</h1>
                            <p>Garatimos o sigilo dos seus dados, não se preocupe</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CSSModule(SiteInfo, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })