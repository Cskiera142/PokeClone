import { useEffect, useState } from "react";
import "../../pages/nationalPokedex/NationalPokedex.css";

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: string[];
  image: string;
}

const BASE_URL = `https://pokeapi.co/api/v2/`;

function PokemonByName() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const scrollToId = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          // Sort Pokémon alphabetically by name
          pokemonWithDetails.sort((a, b) =>
            a.name.localeCompare(b.name, "en", { sensitivity: "base" })
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

  const alphabet: { [key: string]: Pokemon[] } = {};

  // Separate Pokémon by the first letter of their names
  pokemonList.forEach((pokemon) => {
    const firstLetter = pokemon.name.charAt(0).toUpperCase();
    if (!alphabet[firstLetter]) {
      alphabet[firstLetter] = [];
    }
    alphabet[firstLetter].push(pokemon);
  });

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

  return (
    <div id="generation-container">
      {Object.keys(alphabet)
        .sort()
        .map((alphabetLetter) => (
          <div
            key={alphabetLetter}
            className="generation-content"
            id={alphabetLetter}
          >
            <h3 style={{ marginLeft: "0" }}>{alphabetLetter}</h3>

            {/* Navigation links within the section */}
            <div id="alphabet-links">
              <p>Contents</p>
              <a id="Top" href="#Top" onClick={(e) => scrollToId("Top", e)}>
                Top
              </a>
              <a id="A" href="#A" onClick={(e) => scrollToId("A", e)}>
                A
              </a>
              <a id="B" href="#B" onClick={(e) => scrollToId("B", e)}>
                B
              </a>
              <a id="C" href="#C" onClick={(e) => scrollToId("C", e)}>
                C
              </a>
              <a id="D" href="#D" onClick={(e) => scrollToId("D", e)}>
                D
              </a>
              <a id="E" href="#E" onClick={(e) => scrollToId("E", e)}>
                E
              </a>
              <a id="F" href="#F" onClick={(e) => scrollToId("F", e)}>
                F
              </a>
              <a id="G" href="#G" onClick={(e) => scrollToId("G", e)}>
                G
              </a>
              <a id="H" href="#H" onClick={(e) => scrollToId("H", e)}>
                H
              </a>
              <a id="I" href="#I" onClick={(e) => scrollToId("I", e)}>
                I
              </a>
              <a id="J" href="#J" onClick={(e) => scrollToId("J", e)}>
                J
              </a>
              <a id="K" href="#K" onClick={(e) => scrollToId("K", e)}>
                K
              </a>
              <a id="L" href="#L" onClick={(e) => scrollToId("L", e)}>
                L
              </a>
              <a id="M" href="#M" onClick={(e) => scrollToId("M", e)}>
                M
              </a>
              <a id="N" href="#N" onClick={(e) => scrollToId("N", e)}>
                N
              </a>
              <a id="O" href="#O" onClick={(e) => scrollToId("O", e)}>
                O
              </a>
              <a id="P" href="#P" onClick={(e) => scrollToId("P", e)}>
                P
              </a>
              <a id="Q" href="#Q" onClick={(e) => scrollToId("Q", e)}>
                Q
              </a>
              <a id="R" href="#R" onClick={(e) => scrollToId("R", e)}>
                R
              </a>
              <a id="S" href="#S" onClick={(e) => scrollToId("S", e)}>
                S
              </a>
              <a id="T" href="#T" onClick={(e) => scrollToId("T", e)}>
                T
              </a>
              <a id="U" href="#U" onClick={(e) => scrollToId("U", e)}>
                U
              </a>
              <a id="V" href="#V" onClick={(e) => scrollToId("V", e)}>
                V
              </a>
              <a id="W" href="#W" onClick={(e) => scrollToId("W", e)}>
                W
              </a>
              <a id="X" href="#X" onClick={(e) => scrollToId("X", e)}>
                X
              </a>
              <a id="Y" href="#Y" onClick={(e) => scrollToId("Y", e)}>
                Y
              </a>
              <a id="Z" href="#Z" onClick={(e) => scrollToId("Z", e)}>
                Z
              </a>
            </div>
            <div
              id="pokemon-generation-list-border"
              style={{
                marginBottom: "10rem",
                border: "2px solid #f8d030",
              }}
            >
              {alphabet[alphabetLetter].map((pokemon) => (
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
                  <div style={{ textWrap: "wrap" }}>{pokemon.name}</div>
                  <div className="types-container">
                    {pokemon.types.map((type) => (
                      <div
                        key={type}
                        className="type-element"
                        style={{
                          padding: "2.5rem 0",
                          backgroundColor: typeColors[type.toLowerCase()],
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
  );
}

export default PokemonByName;
