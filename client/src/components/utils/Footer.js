import '../../css/footer.css';

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link
          to={{ pathname: 'https://github.com/captainflo' }}
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/florianlahitte/' }}
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
      <div className="footer-copyright">
        This website is made with <i className="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default Footer;
