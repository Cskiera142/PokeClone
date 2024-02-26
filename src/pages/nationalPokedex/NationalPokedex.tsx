import { useEffect, useState } from "react";
import "./NationalPokedex.css";
import Footer from "../../components/footer/Footer";
import PleaseRememberHeader from "../../components/pleaseRememberHeader/PleaseRememberHeader";
import BannerAd from "../../components/bannerAd/BannerAd";

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: string[];
  image: string;
}

const BASE_URL = `https://pokeapi.co/api/v2/`;

function NationalPokedex() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const allPokemon = [];
        let nextUrl = `${BASE_URL}pokemon/`;

        while (nextUrl) {
          const response = await fetch(nextUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const responseData = await response.json();
          const data = responseData.results;
          console.log(data);

          const extractIdFromUrl = (url: string) => {
            const idRegExp = /\/(\d+)\//;
            const match = url.match(idRegExp);
            return match ? parseInt(match[1]) : null;
          };

          const fetchPokemonDetails = async (url: string) => {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const pokemonDetails = await response.json();
            return pokemonDetails;
          };

          const capitalizeFirstLetter = (name: string): string => {
            return name.charAt(0).toUpperCase() + name.slice(1);
          };

          const pokemonWithDetails = await Promise.all(
            data.map(async (pokemon: Pokemon) => {
              const id = extractIdFromUrl(pokemon.url);
              const details = await fetchPokemonDetails(
                `${BASE_URL}pokemon/${id}`
              );
              return {
                ...pokemon,
                id,
                image: details.sprites.front_default,
                name: capitalizeFirstLetter(pokemon.name),
                types: details.types.map(
                  (type: { type: { name: string } }) => type.type.name
                ),
              };
            })
          );

          allPokemon.push(...pokemonWithDetails);
          nextUrl = responseData.next;
        }

        setPokemonList(allPokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemon();
  }, []);

  const generations: { [key: number]: Pokemon[] } = {
    0: [], // Generation 1
    1: [], // Generation 2
    2: [], // Generation 3
    3: [], // Generation 4
    4: [], // Generation 5
    5: [], // Generation 6
    6: [], // Generation 7
    7: [], // Generation 8
    8: [], // Generation 9
  };

  const typeColors: { [key: string]: string } = {
    fire: "#f08030",
    grass: "#78c850",
    poison: "#a040a0",
    flying: "#a890f0",
    psychic: "#f85888",
    water: "#6890f0",
    bug: "#a8b820",
    normal: "#a8a878",
    dark: "#705848",
    electric: "#f8d030",
    physic: "#f85888",
    ground: "#e0c068",
    ice: "#e0c068",
    steel: "#b8b8d0",
    fairy: "#ee99ac",
    fighting: "#c03028",
    rock: "#b8a038",
    dragon: "#7038f8",
    ghost: "#705898",
  };

  const generationsBorderColors: { [key: string]: string } = {
    generation1: "#ff1111",
    generation2: "#daa520",
    generation3: "#a00000",
    generation4: "#aaaaff",
    generation5: " #444444",
    generation6: " #025da6",
    generation7: " #f1912b",
    generation8: " #00a1e9",
    generation9: " #f34134",
  };

  const numberToRoman = (num: number): string => {
    const romanNumerals: string[] = [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ];

    return romanNumerals[num];
  };

  pokemonList.forEach((pokemon) => {
    if (pokemon.id <= 151) {
      generations[0].push(pokemon);
    } else if (pokemon.id <= 251) {
      generations[1].push(pokemon);
    } else if (pokemon.id <= 386) {
      generations[2].push(pokemon);
    } else if (pokemon.id <= 493) {
      generations[3].push(pokemon);
    } else if (pokemon.id <= 649) {
      generations[4].push(pokemon);
    } else if (pokemon.id <= 721) {
      generations[5].push(pokemon);
    } else if (pokemon.id <= 809) {
      generations[6].push(pokemon);
    } else if (pokemon.id <= 898) {
      generations[7].push(pokemon);
    } else if (pokemon.id <= 999) {
      generations[8].push(pokemon);
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
        <div id="generation-container">
          {Object.keys(generations).map((generationNumber) => (
            <div key={generationNumber} className="generation-content">
              <h3 style={{ marginLeft: "0" }}>
                Generation {numberToRoman(parseInt(generationNumber))}
              </h3>
              <div
                id="pokemon-generation-list-border"
                style={{
                  marginBottom: "10rem",
                  border: `2px solid ${
                    generationsBorderColors[
                      `generation${parseInt(generationNumber) + 1}`
                    ]
                  }`,
                }}
              >
                {generations[parseInt(generationNumber)].map((pokemon) => (
                  <div
                    key={pokemon.id}
                    className="pokemon-card"
                    style={{
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    <p>#{pokemon.id}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <div>{pokemon.name}</div>
                    <div className="types-container">
                      {pokemon.types.map((type, index) => (
                        <div
                          key={type}
                          className="type-element"
                          style={{
                            padding: "2.43rem 0",
                            backgroundColor: typeColors[type.toLowerCase()],
                            border: `1px solid ${
                              typeColors[type.toLowerCase()]
                            }`,
                            flex: 1,
                            textAlign: "center",
                          }}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NationalPokedex;
