import HeroCard from "../../components/heroCard/HeroCard";
import BannerAd from "../../components/bannerAd/BannerAd";
import Updates from "../../components/updates/Updates";
import Accessibility from "../../components/accessibility/Accessibility";
import "./LandingPage.css";
import Footer from "../../components/footer/Footer";

function LandingPage() {
  return (
    <div id="content">
      <HeroCard />
      <BannerAd />
      <Updates />
      <Accessibility />
      <BannerAd style={{ backgroundColor: "transparent" }} />
      <Footer />
    </div>
  );
}

export default LandingPage;
