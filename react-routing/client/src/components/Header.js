import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* TODO: Make these links to About and Catalog, with className "title" */}
            <Link to="/about">
              <li className="nav-item nav-link">About</li>
            </Link>
            <Link to="/">
              <li className="nav-item nav-link">Catalog</li>
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
