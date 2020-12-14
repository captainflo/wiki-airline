import React from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import validate from './form/validation';

const Signin = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);

  const { handleSubmit, submitting } = props;
  const onSubmit = (value) => {
    props.signin(value, () => {
      props.history.push('/');
    });
  };

  return (
    <div className="container">
      <h2>
        Sigin <i className="fas fa-sign-in-alt"></i>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <div>
          <div className="form-group">
            {error ? <span className="text-danger">{error}</span> : ''}
          </div>
          <button
            className="btn btn-primary shadow rounded btn-website"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'SignInForm', validate })
)(Signin);
