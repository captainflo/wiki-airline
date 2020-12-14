import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/signup' },
    !currentUser && { label: 'Sign In', href: '/signin' },
    currentUser && { label: 'Account', href: `/user/${currentUser._id}` },
    currentUser && { label: 'Sign Out', href: '/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href}>
          <Link to={href}>
            <span>{label}</span>
          </Link>
        </li>
      );
    });

  return <ul>{links}</ul>;
};

export default Header;
