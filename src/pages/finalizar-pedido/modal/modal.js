import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './modal.module.css';


class ModalPage extends React.Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Finalizar</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Finalizar pedido</MDBModalHeader>
        <MDBModalBody>
          (...)
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Cancelar</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default CSSModule(ModalPage, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })