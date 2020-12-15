import React from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import validate from './form/validation';

const Signup = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);

  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    props.signup(value, () => {
      props.history.push('/');
    });
  };

  return (
    <div>
      <h2>Sigup</h2>
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
        <Field
          name="confirmPassword"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
        <div>
          <div>{error ? <span>{error}</span> : ''}</div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'SignUpForm', validate })
)(Signup);
