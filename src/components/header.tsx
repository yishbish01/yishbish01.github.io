import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="logo-container">
          <li>
            <Link to="/">
              <span className="logo">*</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="YR">YR</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/misc">Misc</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://google.com" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
