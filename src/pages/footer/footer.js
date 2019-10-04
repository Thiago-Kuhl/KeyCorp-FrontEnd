
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './footer.module.css';
import Menu from '../menu/menu.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div styleName="footer">
                <div styleName="rodape">
                    <div className="row">
                        <div className="col-2" styleName="col col-logo">
                            <div styleName="logo">

                            </div>

                            <span styleName="text">
                                <p>Todos os seus direitos reservados</p>
                            </span>

                        </div>

                        <div className="col-3" styleName="col">

                        </div>
                        <div className="col-3" styleName="col">

                        </div>
                        <div className="col-3" styleName="col">

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CSSModule(Footer, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
