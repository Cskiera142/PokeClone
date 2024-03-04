import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: string[];
  image: string;
}

const BASE_URL = `https://pokeapi.co/api/v2/`;

function NationalPokedexGenerations() {
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
              border: "2px solid red",
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
                  {pokemon.types.map((type) => (
                    <div
                      key={type}
                      className="type-element"
                      style={{
                        padding: "2.43rem 0",
                        backgroundColor: typeColors[type.toLowerCase()],
                        border: `1px solid ${typeColors[type.toLowerCase()]}`,
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

export default NationalPokedexGenerations;
