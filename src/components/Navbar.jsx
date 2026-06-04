import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="button-container">
      <Link to="/" id="button1">
        About Me
      </Link>
      <Link to="/projects" id="button2">
        Projects
      </Link>
      <Link to="/contact" id="button3">
        Contact
      </Link>
    </div>
  );
}
