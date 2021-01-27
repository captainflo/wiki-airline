import moment from 'moment';

const validate = (values) => {
  const errors = {};
  let timeNow = moment.utc().format('MM-DD-YYYY');
  if (!values.from) {
    errors.from = 'Required';
  }

  if (!values.to) {
    errors.to = 'Required';
  }

  if (!values.depart) {
    errors.depart = 'Required';
  } else if (moment.utc(values.depart).format('MM-DD-YYYY') < timeNow) {
    errors.depart = 'must be equal or higher than today';
  }

  if (!values.returnDate) {
    errors.returnDate = 'Required';
  } else if (moment.utc(values.returnDate).format('MM-DD-YYYY') < timeNow) {
    errors.returnDate = 'must be equal or higher than today';
  } else if (
    moment.utc(values.returnDate).format('MM-DD-YYYY') <
    moment.utc(values.depart).format('MM-DD-YYYY')
  ) {
    errors.returnDate = 'must be higher than depart';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  if (!values.depTime) {
    errors.depTime = 'Required';
  }

  if (!values.arrTime) {
    errors.arrTime = 'Required';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  return errors;
};

export default validate;
