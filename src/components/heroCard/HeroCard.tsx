import "./HeroCard.css";
import PleaseRememberHeader from "../pleaseRememberHeader/PleaseRememberHeader";

function HeroCard() {
  return (
    <div id="hero-card">
      <PleaseRememberHeader />
      <div id="welcome">
        <h2>Welcome to Bulbapedia</h2>
        <h5>the community-driven Pokémon encyclopedia</h5>
        <p>
          Bulbapedia is an encyclopedia about Pokémon to which anyone can
          contribute. Since its launch in February 2005, it has grown to become
          one of the largest Pokémon resources on the internet. As part of
          Bulbagarden, this ever-growing wiki is supported by the Bulbagarden
          Archives, the Bulbagarden forums and the Bulbagarden Discord. You're
          welcome to browse for a while, if you wish, or make an account to
          start editing pages.
        </p>
        <p>We have 52,392 articles on a range of Pokémon-related topics.</p>
        <p>
          {" "}
          If you have any questions, first see the FAQ page. If this doesn't
          help, find an active staff member. They'll point you in the right
          direction.
        </p>
        <ul id="hero-nav">
          <li>Getting started</li>
          <li>FAQ</li>
          <li>Lend a Hand</li>
          <li>Style</li>
          <li>Policy</li>
          <li>Staff</li>
          <li>About Bulbapedia</li>
        </ul>
      </div>
    </div>
  );
}

export default HeroCard;
