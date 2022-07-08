import { useState } from "react";
import Modal from "react-modal";
import "./CookieModal.css"


const customStyles = {
    content: {
      width: '500px',
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

  const initialValue = {
    inputResponse : '',
}

export function NameModal () {
    const [inputVal, setInputVal] = useState(initialValue);
    const [modalIsOpen, setModalOpen] = useState(true);

    function openModal () {
        setModalOpen(true);
    }

    function closeModal () {
        setModalOpen(false);
        let nickname = inputVal.toString().toUpperCase();
        localStorage.setItem('nickname', nickname);
    }

    function onChange (ev: any) {
      const { value } = ev.target;
      setInputVal(value);
  }
   return (
    <div>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          >
            <p className="modal-title">Type your nickname</p>
            <div className="modal-content">
            <input className="modal-input" type="text" onChange={onChange} maxLength={3}/>
            <button onClick={closeModal}>Save</button>
            </div>
        </Modal>
    </div>
   ) 
}