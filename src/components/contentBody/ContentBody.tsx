import "./ContentBody.css";
import HeroCard from "../heroCard/HeroCard";
import BannerAd from "../bannerAd/BannerAd";
import Updates from "../updates/Updates";
import Accessibility from "../accessibility/Accessibility";

function ContentBody() {
  return (
    <div id="content">
      <HeroCard />
      <BannerAd />
      <Updates />
      <Accessibility />
    </div>
  );
}

export default ContentBody;
