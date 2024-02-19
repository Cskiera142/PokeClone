import React from "react";
import NewsNav from "../newsNav/NewsNav";
import NewsMain from "../newsMain/NewsMain";
import NewsSidebar from "../newsSidebar/NewsSidebar";
import "./NewsContent.css";

function NewsContent() {
  return (
    <div id="news-flex">
      <div>
        <NewsNav />
        <NewsMain />
      </div>
      <NewsSidebar />
    </div>
  );
}

export default NewsContent;
