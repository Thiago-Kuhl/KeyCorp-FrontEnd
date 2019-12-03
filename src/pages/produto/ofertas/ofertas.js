import React from 'react';
import 'react-bootstrap';
import CSSModule from 'react-css-modules';
import style from './ofertas.module.css';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../produto/produto.js';
import Combo2 from '../../../image/combo2.png'
import Postman from '../../../image/postman.png'
import Sublime from '../../../image/sublime.png'
import VisualStudio from '../../../image/vs.png'


var img1 = Combo2;
var img2 = Combo2;
var postman = Postman;
var sublime = Sublime;
var vs = VisualStudio;

class Ofertas extends React.Component {
    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    //     axios.get('http://35.237.149.227/search/products')
    //         .then(res => {

    //             console.log(res.status);
    //             console.log(res.data[id])

    //             var resposta = res.data;

    //             console.log(resposta);

    //             sessionStorage.setItem("idProduto", resposta[id].idProduto)
    //             sessionStorage.setItem('titulo', resposta[id].nomeProduto);
    //             sessionStorage.setItem('valor', resposta[id].valorBase);
    //             sessionStorage.setItem('descricao', resposta[id].descProduto);
    //             sessionStorage.setItem('id', id);

    //             console.log(resposta[id].nomeProduto);

    //             return window.location.href = "./detalhes";

    //         }
    //         )
    //         .catch(error => {
    //             return error;
    //         }
    //         )
    // }



    // show = () => {

    //     axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    //     axios.get('http://35.237.149.227/get/favorites/' + idUser)
    //         .then(res => {

    //             var view = "\n";
    //             //Lógica para percorrer produtos
    //             var resposta = res.data;

    //             for (var i in resposta) {

    //                 resposta[i] = res.data[i];

    //                 console.log(resposta[i].idProduto);

    //                 view += ' <div id="favorito"><div id="prod-favorite"><p> Aqui vai o titulo ' + resposta[i].idProduto + '</p><a><Button id="btn-favorite" value=' + resposta[i].idProduto + ' styleName="btn text" onClick={' + deleteFavorite() + '}>Remover</Button><a><span><h3>Descrição</h3><h3>Valor: R$</h3></span></div></div>';
    //             }
    //             view += "\n";

    //             document.getElementById('show').innerHTML = view;
    //         })
    //         .catch(error => {
    //             return error;
    //         }
    //         )
    // }


    clearStorage = (event) => {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

    render() {
        // console.log(this.state);
        return (
            <>
                <Menu />
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Ofertas do Dia</li>
                    </ol>
                </div>

                <div className="container" styleName="page">
                    {/* destaques abaixo */}
                    <div styleName="destaques">
                        <h3 styleName="heading">Destaques do dia</h3>
                        <div className="row">
                            <div className="col">
                                <img src={"https://via.placeholder.com/580x550"} styleName="dImages" alt="destaques" />
                            </div>
                            <div className="col">
                                <div className="row">
                                    <img src={vs} styleName="dImages" alt="destaques" width="268" height="268" href="#" />
                                    <img src={postman} styleName="dImages" alt="destaques" width="268" height="268" href="#" />
                                </div>
                                <div className="row">
                                    <img src={sublime} styleName="dImages" alt="destaques" width="268" height="268" href="#" />
                                    <img src={postman} styleName="dImages" alt="destaques" width="268" height="268" href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* combos abaixo */}
                    <div styleName="combos">
                        <h3 styleName="heading">Confira nossos combos especiais:</h3>
                        <div className="row">
                            <img src={"https://via.placeholder.com/600x200"} styleName="comboImages" alt="combos" /*width="480" height="216" href="#"*/ />
                            <img src={"https://via.placeholder.com/600x200"} styleName="comboImages" alt="combos" /*width="480" height="216" href="#"*/ />
                        </div>
                    </div>
                    {/* outras ofertas */}
                    <div styleName="outros">
                        <h3 styleName="heading">Outras ofertas:</h3>
                        <div className="row" styleName="produto">
                            <div id="show" className="show">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}


export default CSSModule(Ofertas, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })