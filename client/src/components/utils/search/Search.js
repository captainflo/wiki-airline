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

const Search = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <div className="search">
      <h1 className="display-4">Book your flight</h1>
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
    },
  })
)(Search);
