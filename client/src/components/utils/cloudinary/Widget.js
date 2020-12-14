import './widget.css';
const Widget = (props) => {
  return (
    <div className="form-group">
      <label>Upload Photo</label>
      <p className="upload-button" onClick={() => props.showWidget()}>
        <i className="fas fa-camera"></i>
      </p>
      {props.image ? (
        <div>
          <div className="delete-picture" onClick={() => props.deletePhoto()}>
            <i className="far fa-times-circle"></i>
          </div>
          <img className="photo-show" src={props.image} alt="avatar" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Widget;
