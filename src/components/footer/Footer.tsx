import "./Footer.css";
import FooterAd from "../footerAd/FooterAd";
function Footer() {
  return (
    <div id="footer">
      <ul id="footer-list">
        <li>
          <div></div>
        </li>
        <li>This page was last edited on 1 November 2022, at 22:05.</li>
        <li>
          Content is available under Attribution-NonCommercial-ShareAlike 2.5.
          (see Copyrights for details)
        </li>
        <li>Privacy Policy</li>
        <li>About</li>
        <li>
          <div></div>
        </li>
      </ul>
      <hr></hr>
      <FooterAd />
    </div>
  );
}

export default Footer;
