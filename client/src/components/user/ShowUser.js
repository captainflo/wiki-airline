import React from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Card from '../utils/userCard/Card';
import Loading from '../utils/Loading';

const ShowUser = (props) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Loading />;
  }

  return (
    <div>
      <Card user={user} />
    </div>
  );
};

export default connect(null, actions)(ShowUser);
