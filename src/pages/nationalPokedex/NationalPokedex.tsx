import React, { useEffect } from "react";
import "./NationalPokedex.css";
import { BASE_URL } from "../../config";
import Footer from "../../components/footer/Footer";
import FooterAd from "../../components/footerAd/FooterAd";

interface Pokemon {
  // Define the structure of your Pokemon object
  // For example, name, id, etc.
}

function NationalPokedex() {
  useEffect(() => {
    const fetchPokemon = async () => {
      const url = `${BASE_URL}pokemon`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Pokemon[] = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div id="nationalPokedex-center">
      <div id="nationalPokedex-content">
        <h1>Hello World</h1>
      </div>
      <Footer />
      <FooterAd />
    </div>
  );
}

export default NationalPokedex;
