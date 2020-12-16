import { Link } from 'react-router-dom';
import '../../css/usercard.css';

const UserCard = ({ user }) => {
  return (
    <div className="card wrapper-card">
      <img
        className="img-fluid"
        src={process.env.PUBLIC_URL + '/images/usercard.jpeg'}
        alt="backgroung"
      />
      <div className="user-avatar">
        <img className="img-fluid" src={user.avatar} alt="backgroung" />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {user.firstName} {user.lastName}
        </h5>

        <p className="card-text">{user.email}</p>
        <Link to={`/user/edit/${user._id}`}>
          <button className="btn btn-primary">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};
export default UserCard;
