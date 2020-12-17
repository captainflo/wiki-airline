import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import validate from './form/validation';
import renderField from './form/renderField';
import renderCheckbox from './form/renderCheckbox';

import '../../../css/search.css';

const Search = (props) => {
  const { handleSubmit, submitting } = props;

  // CheckBox
  const [roundTrip, setRoundTrip] = useState(true);
  const [oneWay, setOneWay] = useState('');

  const handleChangeOneWay = () => {
    setRoundTrip(false);
    setOneWay(true);
  };

  const handleChangeRoundTrip = () => {
    setRoundTrip(true);
    setOneWay(false);
  };

  // Submit
  const onSubmit = (value) => {
    delete value.oneWay;
    delete value.roundTrip;
    if (oneWay) {
      delete value.returnDate;
    }
    console.log(value);
  };

  return (
    <div className="search">
      <div className="text-center">
        <Field
          name="roundTrip"
          type="radio"
          component={renderCheckbox}
          onChange={handleChangeRoundTrip}
          value={roundTrip}
          checked={roundTrip}
          label="Round trip"
        />
        <Field
          name="oneWay"
          type="radio"
          onChange={handleChangeOneWay}
          component={renderCheckbox}
          value={oneWay}
          checked={oneWay}
          label="One way"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="from"
          type="text"
          component={renderField}
          label="From"
          placeholder="Miami"
        />
        <Field
          name="to"
          type="text"
          component={renderField}
          label="To"
          placeholder="Las Vegas"
        />
        <Field
          type="date"
          name="depart"
          component={renderField}
          label="Depart"
        />
        {!oneWay ? (
          <Field
            type="date"
            name="returnDate"
            component={renderField}
            label="Return"
          />
        ) : (
          ''
        )}

        <div>
          {/* <div className="form-group">
                  {error ? <span className="text-danger">{error}</span> : ''}
                </div> */}
          <button
            className="btn btn-primary "
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
  reduxForm({ form: 'SearchForm', validate })
)(Search);
