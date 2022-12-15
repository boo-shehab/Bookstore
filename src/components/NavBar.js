import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav-bar">
    <Link className="nav-brand" to="/">bookstore</Link>
    <ul className="nav-links">
      <li>
        <NavLink className="nav-link" to="/">Books</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/Categories">categories</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">person</span>
    </button>
  </nav>
);
export default NavBar;
