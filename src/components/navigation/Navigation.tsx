import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function Navigation() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="nav">
      <ul id="nav-left">
        <div>BULBAPEDIA</div>
        <Link to="/news">News</Link>
        <button onClick={openModal}>Bulbapedia</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        <Link to="/forums">Forums</Link>
        <li>Discord</li>
        <li>More</li>
      </ul>
      <ul id="nav-right">
        <div>Editors</div>
        <div>Account</div>
        <input />
      </ul>
    </div>
  );
}

export default Navigation;
