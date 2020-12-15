import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Loading from '../utils/Loading';

import Avatar from '@material-ui/core/Avatar';

const ShowUser = (props) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Loading />;
  }

  return (
    <div>
      <Avatar alt="Avatar" src={user.avatar} />
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <Link to={`/user/edit/${user._id}`}>
        <button>Edit Profile</button>
      </Link>
    </div>
  );
};

export default connect(null, actions)(ShowUser);
