import React from "react";
import "./NewsNav.css";

function NewsNav() {
  return (
    <div id="news-Nav">
      <div>
        <h3>Latest News</h3>
      </div>
      <ul>
        <li>All</li>
        <li>Games</li>
        <li>Anime</li>
        <li>TCG</li>
        <li>Manga</li>
        <li>Merchandise</li>
        <li>Events</li>
        <li>Community</li>
        <li>Columns</li>
      </ul>
    </div>
  );
}

export default NewsNav;
