import { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function Navigation() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function componentWillMount() {
    Modal.setAppElement("body");
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="nav">
      <ul id="nav-left">
        <div style={{ marginRight: "1rem" }}>BULBAGARDEN</div>
        <Link to="/news">News</Link>
        <Link
          className="bulbapedia-nav-link"
          style={{ display: "block" }}
          to={"/"}
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          Bulbapedia
        </Link>
        <Modal
          className="modal"
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onAfterOpen={componentWillMount}
          onRequestClose={closeModal}
          contentLabel="navigation modal"
        >
          <button>Bulbapedia main page</button>
          <div id="modal-lists">
            <ul>
              <li style={{ textDecoration: "underline" }}>Pokemon</li>
              <li>National Pokedex</li>
              <li>By Name</li>
              <li>Legendary</li>
              <li>Mythical</li>
              <li>Event Pokemon</li>
              <li>Noble Pokemon</li>
              <li>Gigantamax</li>
              <li>Alpha Pokemon</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>Mechanics</li>
              <li>Types</li>
              <li>Type Chart</li>
              <li>Abilities</li>
              <li>Nature</li>
              <li>Status Conditions</li>
              <li>Moves</li>
              <li>Items</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>Games</li>
              <li>Walkthroughs</li>
              <li>
                Pokemon Legends:
                <br />
                Arceus
              </li>
              <li>
                Pokemon Brilliant
                <br />
                Diamond and Shining
                <br />
                Pearl
              </li>
              <li>Sword & Shield</li>
              <li>Spin Offs</li>
              <li>GO</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>TCG</li>
              <li>About</li>
              <li>How to Play</li>
              <li>Rotation</li>
              <li>Promotional Cards</li>
              <li>Brilliant Stars</li>
              <li>Fusion Strike</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>Anime & Manga</li>
              <li>Ash Ketchum</li>
              <li>Anime</li>
              <li>Anime Characters</li>
              <li>Journeys Episodes</li>
              <li>Movies</li>
              <li>Manga</li>
            </ul>
          </div>
        </Modal>
        <Link to="/forums">Forums</Link>
        <a href="https://discord.com/invite/bulbagarden">Discord</a>
        <li>More</li>
      </ul>
      <ul id="nav-right">
        <div
          className="editors-nav-link"
          style={{ display: "block" }}
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          Editors
        </div>
        <div
          className="account-nav-link"
          style={{ display: "block" }}
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          Account
        </div>
        <Modal
          className="modal"
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onAfterOpen={componentWillMount}
          onRequestClose={closeModal}
          contentLabel="navigation modal"
        >
          <button>Bulbapedia main page</button>
          <div id="modal-lists">
            <ul>
              <li style={{ textDecoration: "underline" }}>Pokemon</li>
              <li>National Pokedex</li>
              <li>By Name</li>
              <li>Legendary</li>
              <li>Mythical</li>
              <li>Event Pokemon</li>
              <li>Noble Pokemon</li>
              <li>Gigantamax</li>
              <li>Alpha Pokemon</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>Mechanics</li>
              <li>Types</li>
              <li>Type Chart</li>
              <li>Abilities</li>
              <li>Nature</li>
              <li>Status Conditions</li>
              <li>Moves</li>
              <li>Items</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>Games</li>
              <li>Walkthroughs</li>
              <li>
                Pokemon Legends:
                <br />
                Arceus
              </li>
              <li>
                Pokemon Brilliant
                <br />
                Diamond and Shining
                <br />
                Pearl
              </li>
              <li>Sword & Shield</li>
              <li>Spin Offs</li>
              <li>GO</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>TCG</li>
              <li>About</li>
              <li>How to Play</li>
              <li>Rotation</li>
              <li>Promotional Cards</li>
              <li>Brilliant Stars</li>
              <li>Fusion Strike</li>
            </ul>
            <ul>
              <li style={{ textDecoration: "underline" }}>Anime & Manga</li>
              <li>Ash Ketchum</li>
              <li>Anime</li>
              <li>Anime Characters</li>
              <li>Journeys Episodes</li>
              <li>Movies</li>
              <li>Manga</li>
            </ul>
          </div>
        </Modal>
        <input id="search" type="text" placeholder="Search Bulbapedia" />
      </ul>
    </div>
  );
}

export default Navigation;
