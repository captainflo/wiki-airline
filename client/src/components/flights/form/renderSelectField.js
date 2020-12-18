const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error },
  children,
}) => (
  <div>
    <label>{label}</label>
    <div className="form-group">
      <select className="form-control" {...input}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

export default renderSelectField;
