// import "./NationalPokedex.css";
import Footer from "../../components/footer/Footer";
import PleaseRememberHeader from "../../components/pleaseRememberHeader/PleaseRememberHeader";
import BannerAd from "../../components/bannerAd/BannerAd";
import PokemonByName from "../../components/pokemonByName/PokemonByName";

function ByNamePage() {
  return (
    <div id="nationalPokedex-center">
      <div style={{ marginBottom: "5rem" }} id="nationalPokedex-content">
        <PleaseRememberHeader />
        <h2 style={{ margin: ".5rem", textAlign: "left" }}>
          List of Pokémon by name
        </h2>
        <hr></hr>
        <p style={{ marginBottom: "1rem" }}>
          From Bulbapedia, the community-driven Pokémon encyclopedia.
        </p>
        <div className="shortcuts-align">
          <p>
            This is an alphabetical list of Pokémon by their English language
            names. No Japanese romaji are included in this list; therefore, any
            new Pokémon with unknown English names will not be found here. This
            is also the list order that is seen by the player in Pokémon
            Colosseum and Pokémon XD in the Strategy Memo (minus Pokémon
            introduced after Generation III).
          </p>
          <BannerAd />
        </div>

        <h3>List of Pokémon by name</h3>
        <hr style={{ marginBottom: "1rem" }}></hr>
        <PokemonByName />
      </div>
    </div>
  );
}

export default ByNamePage;
