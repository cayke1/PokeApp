import { useState } from "react";
import Modal from "react-modal";
import "./CookieModal.css";

Modal.setAppElement("#root");

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#9200c2cb',
      border: '3px solid #75fee4',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  };

export function CookieModal () {
    const [modalIsOpen, setIsOpen] = useState(true);
    
    function closeModal (){
        setIsOpen(false);
        localStorage.setItem('cookies', 'allow');
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Cookie Modal"
                onRequestClose={closeModal}
                >
                    <h2 className="modal-title">Cookie policy</h2>
                    <p className="modal-text">This website use cookies to save your "bestStreak" and your nickname on localStorage</p>
                    <div className="modal-content">
                    <button onClick={closeModal} className="modal-button">Ok</button>
                    </div>
            </Modal>
        </div>
    )
}