import { Link } from 'react-router-dom';
import '../../css/header.css';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/signup' },
    !currentUser && { label: 'Sign In', href: '/signin' },
    currentUser && { label: 'Account', href: `/user/${currentUser._id}` },
    currentUser && { label: 'Create Flight', href: `/flight/new` },
    currentUser && { label: 'Sign Out', href: '/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link to={href}>
            <span className="nav-link">{label}</span>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={'/'}>
          <span className="navbar-brand">
            <i className="fas fa-plane-departure"></i> Wiki Airline
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
