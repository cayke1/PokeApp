import { useState, useEffect, ChangeEventHandler } from "react";
import Modal from "react-modal";
import "./Game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { ResponseModal } from "./ResponseModal";
import { NameModal } from "./NameModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#9200c2cb",
    border: "3px solid #75fee4",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

const initialValue = {
  inputResponse: "",
};

export function Game() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [resValue, setResValue] = useState(initialValue);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);
  const [reload, setReload] = useState(0);
  const [count, setCount] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => {
    const stickyValue = localStorage.getItem("bestStreak");

    return stickyValue !== null ? JSON.parse(stickyValue) : 0;
  });
  const [error, setError] = useState([]);

  useEffect(() => {
    localStorage.setItem("bestStreak", bestStreak);
  }, [bestStreak]);

  useEffect(() => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" +
        (Math.floor(Math.random() * 150) + 1)
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemonName(data.forms[0].name);
        setPokemonImage(data.sprites.other["official-artwork"].front_default);
        console.log(pokemonName.toString());
      })
      .catch((err) => {setError(err); console.log(error)});
  }, [count, reload]);

  function onChange(ev: any) {
    const { value } = ev.target;
    setResValue(value);
  }
  

  function checkResponse() {
    if (resValue.toString().trim().toLowerCase() === pokemonName.toString()) {
      const Response = new ResponseModal(
        "success",
        "You done, it's ",
        pokemonName.toString()
      );
      Response.success();
      setCount(count + 100);
    } else {
      if (bestStreak) {
        if(bestStreak < count) {
          setBestStreak(count);
        }
      } else {
        setBestStreak(count);
      }
      const Response = new ResponseModal("error", "Wrong, try again");
      Response.fail();
      setCount(count * 0);
    }
  }

  function tryReload() {
    setReload(Math.random());
    setCount(count * 0);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const name = localStorage.getItem("nickname");
  return (
    <div className="gameContent">
      {name ? "" : <NameModal />}
      <p>Your Best Streak is: {bestStreak}</p>
      <h2>Who is that pokemon?</h2>
      <h4 id="counter">{count}</h4>
      <input type="text" onChange={onChange} id="response" />
      <button onClick={checkResponse} className="buttons" id="btn-1">
        Confirm
      </button>
      <button onClick={openModal} className="buttons" id="btn-2">
        Open Image
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Just testing"
      >
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content">
          <img src={pokemonImage.toString()} alt="" />
        </div>
      </Modal>
      <FontAwesomeIcon
        onClick={tryReload}
        className="reloadIcon"
        icon={faSync}
      />
    </div>
  );
}
