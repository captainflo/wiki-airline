import React, { useState } from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import Widget from '../utils/cloudinary/Widget';
import validate from './form/validation';
import renderSelectField from './form/renderSelectField';
import renderDatepicker from './form/renderDatepicker';

const NewFlight = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);

  const [image, setImage] = useState('');
  const [publicId, setPublicId] = useState('');

  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    const form = {
      from: value.from,
      price: value.price,
      to: value.to,
      depart: value.depart,
      depTime: value.depTime,
      arrTime: value.arrTime,
      type: value.type,
      photo: image,
    };
    props.createFlight(form, () => {
      props.history.push(`/`);
    });
  };

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'dwtc6zep7',
      uploadPreset: 'dedd0jci',
    },
    (error, result) => {
      if (result.event === 'success') {
        setImage(result.info.url);
        setPublicId(result.info.public_id);
      }
    }
  );
  const showWidget = () => {
    widget.open();
  };

  const deletePhoto = async () => {
    const imageDelete = {
      img: publicId,
    };
    props.deleteImage(imageDelete);
    setImage('');
  };

  const types = [
    { title: '' },
    { title: 'Economy' },
    { title: 'Premium economy' },
    { title: 'Business' },
    { title: 'First' },
  ];

  return (
    <div>
      <h4 className="my-4 text-center">
        Create your Flight <i className="fas fa-ticket-alt"></i>
      </h4>
      <div className=" justify-content-center align-items-center">
        <div className="container">
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
            <Field
              component={renderDatepicker}
              name="depTime"
              label="DepTime"
            />
            <Field
              component={renderDatepicker}
              name="arrTime"
              label="ArrTime"
            />
            <Field
              name="price"
              type="number"
              component={renderField}
              label="Price"
            />
            <Field name="type" component={renderSelectField} label="Type">
              {types.map((option) => (
                <option key={option.title} value={option.title}>
                  {option.title}
                </option>
              ))}
            </Field>
            <Widget
              showWidget={showWidget}
              deletePhoto={deletePhoto}
              image={image}
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
      </div>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'NewFlightForm', validate })
)(NewFlight);
