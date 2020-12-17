import moment from 'moment';

const validate = (values) => {
  const errors = {};
  let timeNow = moment().format('YYYY-DD-MM');
  if (!values.from) {
    errors.from = 'Required';
  }

  if (!values.to) {
    errors.to = 'Required';
  }

  if (!values.depart) {
    errors.depart = 'Required';
  } else if (moment.utc(values.depart).format('YYYY-DD-MM') < timeNow) {
    errors.depart = 'must be equal or higher than today';
  }

  if (!values.returnDate) {
    errors.returnDate = 'Required';
  } else if (moment.utc(values.returnDate).format('YYYY-DD-MM') < timeNow) {
    errors.returnDate = 'must be equal or higher than today';
  } else if (
    moment.utc(values.returnDate).format('YYYY-DD-MM') <
    moment.utc(values.depart).format('YYYY-DD-MM')
  ) {
    errors.returnDate = 'must be higher than depart';
  }

  return errors;
};

export default validate;
