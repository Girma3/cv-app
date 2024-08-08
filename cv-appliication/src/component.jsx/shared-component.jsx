import PropTypes from "prop-types";
import { useState } from "react";
//function that show the display form on click
function NavTemplate({ children, text }) {
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
    console.log(showMore);
  }

  return (
    <div className="cv-name">
      <div className="person-info-holder">
        <div>{text}</div>
        <button onClick={handleMoreClick}>+</button>
      </div>
      {showMore && children}
    </div>
  );
}
function YearInput({
  labelName = "",
  id = "0",
  className = "",
  value = "2",
  onChange,
}) {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    new Array(10),
    (value, index) => currentYear - index
  );
  if (className === "school-end-year" || className === "job-end-year") {
    years.unshift("Present");
  }

  return (
    <select
      name={labelName}
      id={id}
      className={className}
      value={value}
      onChange={onChange}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
function MonthForm({
  labelName = "end month",
  id = "end month",
  className = "",
  value = "0",
  onChange,
}) {
  return (
    <>
      <select
        name={labelName}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
      >
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">may</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </>
  );
}

MonthForm.propTypes = {
  labelName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
YearInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  onchange: PropTypes.func,
};
export { NavTemplate, YearInput, MonthForm };
