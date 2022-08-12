import React, {Component} from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./Modal.styled";
import { Picture } from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

componentDidMount() {
window.addEventListener('keydown', this.handleKeyDown)

}



componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)

}
handleKeyDown = e => {
    if (e.code === 'Escape') {
    this.props.onClose();
}
};
handleBackdropClick = e => {

    if(e.currentTarget === e.target) {
        this.props.onClose();
    }
}

render() {
    return createPortal(
<Overlay 

onClick={this.handleBackdropClick}
>

    <Picture 
    
    >
      
      {this.props.children}
      </Picture>
</Overlay>,
 modalRoot,


    )
}

}
