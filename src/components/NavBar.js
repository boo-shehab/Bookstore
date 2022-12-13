import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1>Book store</h1>
    <ul>
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="/Categories">categories</NavLink>
      </li>
    </ul>
  </nav>
);
export default NavBar;
