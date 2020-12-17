const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <div className="input-search">
    <label>{label}</label>
    <div className="form-group">
      <input
        className="form-control"
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default renderField;
