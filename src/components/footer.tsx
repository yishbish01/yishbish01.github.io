import "./footer.scss";
import { HiArrowSmallRight } from "react-icons/hi2";
import YazyButton from "./yazy_button";

const Footer = () => {
  return (
    <footer>
      <hr
        style={{
          backgroundColor: "#A2A2A2",
          height: 1,
          width: "100%",
        }}
      />
      <div className="footer-container">
        <h2>
          INTERESTED S<span>*</span> FAR? Let's talk!
        </h2>
        <div className="footer-info">
          <div className="contact-links">
            <YazyButton
              text="SEND AN EMAIL"
              icon={<HiArrowSmallRight size="1.5em" />}
            />
            <a
              href="https://www.linkedin.com/in/yashini011003/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.behance.net/yashiniravindr"
              target="_blank"
              rel="noreferrer"
            >
              BEHANCE
            </a>
          </div>
          <h4 className="credits">DESIGNED BY YASHINI :D</h4>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
