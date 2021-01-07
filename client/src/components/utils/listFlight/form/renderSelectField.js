const renderSelectField = ({ input, meta: { touched, error }, children }) => (
  <div>
    <div className="form-group">
      <select className="form-control" {...input}>
        {children}
      </select>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

export default renderSelectField;
