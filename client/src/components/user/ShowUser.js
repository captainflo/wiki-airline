import React from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Loading from '../utils/Loading';
import UserCard from '../utils/UserCard';

const ShowUser = (props) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="col-md-5">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default connect(null, actions)(ShowUser);
