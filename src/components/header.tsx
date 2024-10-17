import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="logo-container">
          <li>
            <Link to="/" className="logo">
              *
            </Link>
          </li>
          <li>
            <Link to="/" className="logo-text">
              YR
            </Link>
          </li>
        </ul>
        <ul className="links-container">
          <li>
            <Link to="/misc">MISC</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1O3PD0M2Am6UjwHBOZq1dqAo1fzLd7VVF/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
