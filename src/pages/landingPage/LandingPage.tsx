import HeroCard from "../../components/heroCard/HeroCard";
import BannerAd from "../../components/bannerAd/BannerAd";
import Updates from "../../components/updates/Updates";
import Accessibility from "../../components/accessibility/Accessibility";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div id="landingPage-content">
      <HeroCard />
      <BannerAd />
      <Updates />
      <Accessibility />
      <BannerAd />
    </div>
  );
}

export default LandingPage;
