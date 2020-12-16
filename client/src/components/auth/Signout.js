import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Signout = (props) => {
  useEffect(() => {
    props.signout();
  }, [props.signout, props]);

  return (
    <div className="jumbotron d-flex align-items-center">
      <div className="container">
        <h2>
          Sorry to see you go... <i className="fas fa-sad-tear"></i>
        </h2>
      </div>
    </div>
  );
};

export default connect(null, actions)(Signout);
