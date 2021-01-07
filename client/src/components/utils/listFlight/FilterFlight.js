import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import renderSelectField from './form/renderSelectField';
import '../../../css/filterFlight.css';

const FilterFlight = (props) => {
  const { handleSubmit, submitting } = props;

  const types = [
    { title: 'Departure', value: 'depTime' },
    { title: 'Arrival', value: 'arrTime' },
    { title: 'Price', value: 'price' },
  ];

  const order = [
    { title: '↑ up', value: 'desc' },
    { title: '↓ down', value: 'asc' },
  ];

  return (
    <form className="filter" onSubmit={handleSubmit(props.handleFilter)}>
      <Field name="type" component={renderSelectField}>
        {types.map((option) => (
          <option key={option.title} value={option.value}>
            {option.title}
          </option>
        ))}
      </Field>
      <Field name="order" component={renderSelectField}>
        {order.map((option) => (
          <option key={option.title} value={option.value}>
            {option.title}
          </option>
        ))}
      </Field>

      <button
        className="btn btn-primary shadow rounded btn-website"
        type="submit"
        disabled={submitting}
      >
        Submit
      </button>
    </form>
  );
};

export default compose(
  reduxForm({
    form: 'FilterFlightForm',
    initialValues: {
      type: 'depTime',
      order: 'asc',
    },
  })
)(FilterFlight);
