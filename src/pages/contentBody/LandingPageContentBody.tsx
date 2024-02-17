import Accessibility from "../../components/accessibility/Accessibility";
import BannerAd from "../../components/bannerAd/BannerAd";
import HeroCard from "../../components/heroCard/HeroCard";
import Updates from "../../components/updates/Updates";
import "./LandingPageContentBody.css";

function LandingPageContentBody() {
  return (
    <div id="content">
      <HeroCard />
      <BannerAd />
      <Updates />
      <Accessibility />
    </div>
  );
}

export default LandingPageContentBody;
