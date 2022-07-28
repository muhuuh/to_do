import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseModalToDo} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay onCloseLogin={props.onCloseModalToDo}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
      ;
    </>
  );
};

export default Modal;