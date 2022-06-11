import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export function Game() {
    const [modalIsOpen, setModalOpen] = useState(false);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonImage, setPokemonImage] = useState([]);
    const [error, setError] = useState([]);

        useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 150) + 1))
            .then((res) => res.json())
            .then((data) => {
                setPokemonName(data.forms[0].name);
                setPokemonImage(data.sprites.other['official-artwork'].front_default);
            }).catch(err => setError(err));
    })

    function openModal() {
        setModalOpen(true);
    }
    
    function closeModal() {
        setModalOpen(false);
    }
    

    return (
        <div className='gameContent'>
            <p id='bestStreak'></p>
            <h2>Who is that pokemon?</h2>
            <h4 id='counter'>0</h4>
            <input type='text' id='response' />
            <button className='buttons' id='btn-1'>Confirm</button>
            <button onClick={openModal} className='buttons' id='btn-2'>Open Image</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Just testing"
            >
                <div className='modal-content'>
                    <span className='close' onClick={closeModal}>&times;</span>
                    <img src={pokemonImage.toString()} alt="" />
                </div>
            </Modal>
            <FontAwesomeIcon className='reloadIcon' icon={faSync} />
        </div>
    )
}