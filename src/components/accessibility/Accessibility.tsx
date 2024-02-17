import React from "react";
import "./Accessibility.css";

function Accessibility() {
  return (
    <div id="accessibility-container">
      <div>
        <div id="encyclopedia">
          <h3>Encyclopedia</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            laudantium eius nobis, facilis ratione nihil quos eum iste adipisci
            quasi reiciendis animi laboriosam enim. Id earum beatae blanditiis
            doloribus sed?
          </p>
        </div>
        <div id="partners">
          <h3>Nintendo Independent Wiki Alliance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            nobis, quia optio, laudantium ratione itaque sit facilis debitis
            molestias alias iusto vitae dolorum. Maiores alias vitae temporibus
            adipisci dicta doloribus!
          </p>
        </div>
      </div>
      <div id="affiliates">
        <h3>Bulbapedia is a part of Bulbagarden</h3>
        <ul>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
        </ul>
      </div>
    </div>
  );
}

export default Accessibility;
