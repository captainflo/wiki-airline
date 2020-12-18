import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const renderDatePicker = ({ input, label, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="form-group">
      <DatePicker
        {...input}
        dateFormat="MMMM d, yyyy h:mm aa"
        className="form-control"
        showTimeSelect
        autoComplete="off"
        selected={input.value ? input.value : null}
      />

      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

export default renderDatePicker;
