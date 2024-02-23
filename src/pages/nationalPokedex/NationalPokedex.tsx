import React, { useEffect, useState } from "react";
import "./NationalPokedex.css";
// import { BASE_URL } from "../../config";
import Footer from "../../components/footer/Footer";
import PleaseRememberHeader from "../../components/pleaseRememberHeader/PleaseRememberHeader";
import BannerAd from "../../components/bannerAd/BannerAd";

const BASE_URL = `https://pokeapi.co/api/v2/`;

function NationalPokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const url = `${BASE_URL}pokemon/`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        const data = responseData.results;
        console.log(data.id);

        const pokemonWithId = data.map((pokemon, index) => ({
          ...pokemon,
          id: index,
        }));

        setPokemonList(pokemonWithId);
        console.log(pokemonWithId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemon();
  }, []);

  const generations = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  pokemonList.forEach((pokemon) => {
    if (pokemon.id <= 151) {
      generations[1].push(pokemon);
    } else if (pokemon.id <= 251) {
      generations[2].push(pokemon);
    } else if (pokemon.id <= 386) {
      generations[3].push(pokemon);
    }
  });

  return (
    <div id="nationalPokedex-center">
      <div style={{ marginBottom: "5rem" }} id="nationalPokedex-content">
        <PleaseRememberHeader />
        <h2 style={{ margin: ".5rem", textAlign: "left" }}>
          List of Pokémon by National Pokédex number
        </h2>
        <hr></hr>
        <p style={{ marginBottom: "1rem" }}>
          From Bulbapedia, the community-driven Pokémon encyclopedia.
        </p>
        <div className="shortcuts-align">
          <p>
            This is a list of Pokémon in the order dictated by the National
            Pokédex, meaning that Pokémon from the Kanto region will appear
            first, followed by those from Johto, Hoenn, Sinnoh, Unova, Kalos,
            Alola, Galar, Hisui, and Paldea. Each region's set of Pokémon starts
            with its own set of starter Pokémon and their evolutions, going in
            order of Grass, Fire, Water; the only exception is Unova, which
            begins with Victini, who is then followed by the starter Pokémon.
            <br></br> The first 151 entries in this Pokédex also serve as
            Kanto's regional Pokédex. In Generation II, this Pokédex order was
            known as the "Old Pokédex", with a new order that put related
            Pokémon near each other also included.
          </p>
          <div id="shortcuts">
            {/* Find out strange bottom spacing below Natdex */}
            <h3>Shortcuts</h3>
            <p>Ndex</p>
            <p>Olddex</p>
            <p>Natdex</p>
          </div>
        </div>
        <div className="Nat-Contents-Card">
          <h4 style={{ textAlign: "center" }}>Contents [hide]</h4>
          {/* Fix h4 padding */}
          <ul>
            <li>1 Legend</li>
            <li>2 List of Pokémon by National Pokédex number</li>
            <ul>
              <li className="generation-padding">Generation I</li>
              <li className="generation-padding">Generation II</li>
              <li className="generation-padding">Generation III</li>
              <li className="generation-padding">Generation IV</li>
              <li className="generation-padding">Generation V</li>
              <li className="generation-padding">Generation VI</li>
              <li className="generation-padding">Generation VII</li>
              <li className="generation-padding">Generation VIII</li>
              <li className="generation-padding">Generation IX</li>
            </ul>
            <li>3 See also</li>
          </ul>
        </div>
        <BannerAd />
        <h3>Legend</h3>
        <hr style={{ marginBottom: "1rem" }}></hr>
        <p style={{ marginBottom: "1rem" }}>
          All form names below match what is seen in the Pokédex in the latest
          game they were in. In places where this does not sufficiently
          differentiate forms, extra clarification is provided in (italicized
          parentheticals).
        </p>
        <h3>List of Pokémon by National Pokédex number</h3>
        <hr style={{ marginBottom: "1rem" }}></hr>
      </div>
      <div id="generation-container"></div>
      <Footer />
    </div>
  );
}

export default NationalPokedex;
