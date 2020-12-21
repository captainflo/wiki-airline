const renderField = ({
  input,
  label,
  value,
  checked,
  meta: { touched, error, warning },
}) => (
  <div className="form-check form-check-inline">
    <input
      {...input}
      placeholder={label}
      value={value}
      checked={checked}
      type="checkbox"
    />
    <label>{label}</label>
  </div>
);

export default renderField;
