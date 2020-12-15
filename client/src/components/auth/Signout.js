import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Signout = (props) => {
  useEffect(() => {
    props.signout();
  }, [props.signout, props]);

  return (
    <div>
      <h2>Sorry to see you go...</h2>
    </div>
  );
};

export default connect(null, actions)(Signout);
