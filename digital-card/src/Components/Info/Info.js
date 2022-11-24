import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import "./Info.css";
import photo from "../../Assets/LySreypov.jpg";

function Info() {
  return (
    <div className="info">
      <div className="info--photo">
        <img src={photo} alt="photo" />
      </div>
      <div className="info--profile">
        <h2>Ly Sreypov</h2>
        <span>Frontend Developer</span>
        <a href="#">lysreypov.khs</a>
      </div>
      <div className="info--contact">
        <a
          className="info--contact_email"
          href="mailto:lysreypov1911@gmail.com"
          target="_blank"
        >
          <MdEmail className="email--icon" /> <span>Email</span>
        </a>
        <a
          className="info--contact_linkedin"
          href="https://www.linkedin.com/in/ly-sreypov-600945200/"
          target="_blank"
        >
          <AiFillLinkedin className="linkedin--icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Info;
