const renderField = ({
  input,
  label,
  type,
  value,
  checked,
  meta: { touched, error, warning },
}) => (
  <div className="form-check form-check-inline">
    <input
      {...input}
      placeholder={label}
      type={type}
      value={value}
      checked={checked}
    />
    <label>{label}</label>
  </div>
);

export default renderField;
