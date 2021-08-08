import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import validate from './form/validation';
import renderField from './form/renderField';
import renderSelectField from './form/renderSelectField';

import '../../../css/search.css';

const persons = [
  { title: 1 },
  { title: 2 },
  { title: 3 },
  { title: 4 },
  { title: 5 },
  { title: 6 },
  { title: 7 },
  { title: 8 },
  { title: 9 },
];

const location = [
  { title: 'Miami' },
  { title: 'Las Vegas' },
  { title: 'Boston' },
  { title: 'New York' },
  { title: 'San Francisco' },
];

const locationReturn = [
  { title: 'Las Vegas' },
  { title: 'Miami' },
  { title: 'Boston' },
  { title: 'New York' },
  { title: 'San Francisco' },
];

const Search = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <div className="search">
      <h1 className="display-4">Book your flight</h1>
      <p className="info-demo">
        Full experience select the date August 18 depart and August 19 return
        (Miami to las Vegas)
      </p>
      <div className="road-type">
        <Field
          name="roundTrip"
          id="roundTrip"
          component="input"
          type="checkbox"
          checked={props.roundTrip}
          onChange={props.handleChangeRoundTrip}
        />
        <label>Round Trip</label>
        <Field
          name="oneWay"
          id="oneWay"
          component="input"
          type="checkbox"
          checked={props.oneWay}
          onChange={props.handleChangeOneWay}
        />
        <label>One way</label>
      </div>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Field name="from" component={renderSelectField} label={'From'}>
          {location.map((option) => (
            <option key={option.title} value={option.title}>
              {option.title}
            </option>
          ))}
        </Field>
        <Field name="to" component={renderSelectField} label={'To'}>
          {locationReturn.map((option) => (
            <option key={option.title} value={option.title}>
              {option.title}
            </option>
          ))}
        </Field>
        <Field
          type="date"
          name="depart"
          component={renderField}
          label="Depart"
        />
        {!props.oneWay ? (
          <Field
            type="date"
            name="returnDate"
            component={renderField}
            label="Return"
          />
        ) : (
          ''
        )}
        <Field
          name="persons"
          component={renderSelectField}
          label={'Number of passengers'}
        >
          {persons.map((option) => (
            <option key={option.title} value={option.title}>
              {option.title}
            </option>
          ))}
        </Field>
        <div>
          <button
            className="btn btn-primary "
            type="submit"
            disabled={submitting}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({
    form: 'SearchForm',
    validate,
    initialValues: {
      persons: 1,
      from: 'Miami',
      to: 'Las Vegas',
    },
  })
)(Search);
