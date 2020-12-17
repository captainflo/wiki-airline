import React, { useState } from 'react';
import renderField from './form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import Widget from '../utils/cloudinary/Widget';

const EditUser = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);
  const user = useSelector((state) => state.auth.user);
  const [image, setImage] = useState('');
  const [publicId, setPublicId] = useState('');
  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    const id = props.match.params.id;
    const form = {
      firstName: value.firstName,
      lastName: value.lastName,
      avatar: image || user.avatar,
    };

    props.editUser(id, form, () => {
      props.history.push(`/user/${id}`);
    });
  };

  // Image Cluodinary
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

  return (
    <div>
      <h4>Edit User</h4>
      <p>* Leave blank if doesn't want to change</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="Firstname"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Lastname"
        />
        <Widget
          showWidget={showWidget}
          deletePhoto={deletePhoto}
          image={image}
        />
        <div>{error ? <span>{error}</span> : ''}</div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button onClick={() => props.history.goBack()}>back</button>
      </form>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'EditUserForm' })
)(EditUser);
