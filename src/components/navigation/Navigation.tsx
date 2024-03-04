import { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const [bulbapediaNavMenu, setBulbapediaNavMenu] = useState(false);
  const handleMouseEnter = () => {
    setBulbapediaNavMenu(true);
  };

  const handleMouseLeave = () => {
    setBulbapediaNavMenu(false);
  };

  const handleSubMenuEnter = () => {
    // Keep the menu open when the mouse enters the submenu
    setBulbapediaNavMenu(true);
  };

  const handleSubMenuLeave = () => {
    // Close the menu when the mouse leaves the submenu
    setBulbapediaNavMenu(false);
  };

  return (
    <div id="nav">
      <ul id="nav-left">
        <div style={{ marginRight: "1rem" }}>BULBAGARDEN</div>
        <Link to="/news">News</Link>
        <Link
          className="bulbapedia-nav-link"
          style={{ display: "block" }}
          to={"/"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Bulbapedia
        </Link>
        {bulbapediaNavMenu && (
          <div
            id="bulba-nav-lists"
            onMouseEnter={handleSubMenuEnter}
            onMouseLeave={handleSubMenuLeave}
          >
            <div id="bulba-nav-list-align">
              <div>
                <button>
                  <Link to="/">Bulbapedia main page</Link>
                </button>
              </div>
              <div id="bulba-nav-ul-flex">
                <ul>
                  <li>Pokemon</li>
                  <hr></hr>
                  <Link to="/List_of_Pokemon_by_National_Pokedex_number">
                    National Pokedex
                  </Link>
                  <Link to="/List_of_Pokémon_by_name">By Name</Link>
                  <li>Legendary</li>
                  <li>Mythical</li>
                  <li>Event Pokemon</li>
                  <li>Noble Pokemon</li>
                  <li>Gigantamax</li>
                  <li>Alpha Pokemon</li>
                </ul>
                <ul>
                  <li>Mechanics</li>
                  <hr></hr>
                  <li>Types</li>
                  <li>Type Chart</li>
                  <li>Abilities</li>
                  <li>Nature</li>
                  <li>Status Conditions</li>
                  <li>Moves</li>
                  <li>Items</li>
                </ul>
                <ul>
                  <li>Games</li>
                  <hr></hr>
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
                  <li>TCG</li>
                  <hr></hr>
                  <li>About</li>
                  <li>How to Play</li>
                  <li>Rotation</li>
                  <li>Promotional Cards</li>
                  <li>Brilliant Stars</li>
                  <li>Fusion Strike</li>
                </ul>
                <ul>
                  <li>Anime & Manga</li>
                  <hr></hr>
                  <li>Ash Ketchum</li>
                  <li>Anime</li>
                  <li>Anime Characters</li>
                  <li>Journeys Episodes</li>
                  <li>Movies</li>
                  <li>Manga</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <Link to="/forums">Forums</Link>
        <a href="https://discord.com/invite/bulbagarden">Discord</a>
        <li>More</li>
      </ul>
      <ul id="nav-right">
        <div className="editors-nav-link" style={{ display: "block" }}>
          Editors
        </div>
        <div className="account-nav-link" style={{ display: "block" }}>
          Account
        </div>
        <input id="search" type="text" placeholder="Search Bulbapedia" />
      </ul>
    </div>
  );
}

export default Navigation;
