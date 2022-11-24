import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="#">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
