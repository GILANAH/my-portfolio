import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>HOPE</h2>
      </Link>
      <ul>
        <li>
          <Link to="/projects">My projects</Link>
        </li>
        <li>
          <Link to="/contact-me">contact-me</Link>
        </li>
      </ul>
    </div>
  );
}
