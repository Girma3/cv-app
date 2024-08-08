import { useState } from "react";
import { YearInput, MonthForm, NavTemplate } from "./shared-component";

let employmentObj = [
  {
    id: "10",
    "user-position": "Jr",
    "user-employer": "Tde",
    "employer-city": "Texas",
    "job-start-month": "9",
    "job-start-year": "2020",
    "job-end-month": "2",
    "job-end-year": "2023",
    "about-job": "good work place",
  },
  {
    id: "11",
    "user-position": "senior",
    "user-employer": "here",
    "employer-city": "galaxy",
    "job-start-month": "9",
    "job-start-year": "2020",
    "job-end-month": "2",
    "job-end-year": "2023",
    "about-job": "nice work place",
  },
];
let employmentData = employmentObj[0];
function EmploymentInfo() {
  return (
    <NavTemplate text={"Employment"}>
      <EmploymentFormHolder data={employmentObj} />
    </NavTemplate>
  );
}
//function that display employment accept info about the employment and function to handle edit and delete
function Template({ title, name, city, id, handleDelete, handleEdit }) {
  return (
    <div className="employment-info flex-row">
      <div className="info">
        <div className="job-name">{title}</div>
        <div>
          <span className="work-place">{name}</span>
          <span className="city-name">{city}</span>
        </div>
      </div>
      <div className="btn-holder flex-row">
        <button onClick={() => handleEdit(id)} id={id}>
          edit
        </button>
        <button onClick={() => handleDelete(id)} id={id}>
          delete
        </button>
      </div>
    </div>
  );
}
//function that accept object info about employment and function to delete specific employment info
function Employment({ data, id, handleDelete, handleEdit, isEditing }) {
  const [person, setPerson] = useState(data);

  const handleInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  if (!isEditing) {
    return (
      <>
        <Template
          key={person.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          title={person["user-position"]}
          name={person["user-employer"]}
          city={person["employer-city"]}
          id={id}
        />
      </>
    );
  }
  //save local storage
  return (
    <div className="employment-form flex-column">
      <label htmlFor="user-position">Position</label>
      <input
        type="text"
        id="user-position"
        name="user-position"
        value={person["user-position"]}
        onChange={handleInputChange}
      />
      <div className="flex-row">
        <div className="flex-column">
          <label htmlFor="user-employer">Employer</label>
          <input
            type="text"
            id="user-employer"
            name="user-employer"
            value={person["user-employer"]}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="employer-city">City</label>
          <input
            type="text"
            id="employer-city"
            name="employer-city"
            value={person["employer-city"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="date-holder flex-row">
        <div className="job-start">
          <label htmlFor="job-start-month" className="job-start-label">
            Start Date
          </label>
          <MonthForm
            labelName="job-start-month"
            id="job-start-month"
            className="job-start-month"
            value={person["job-start-month"]}
            onchange={handleInputChange}
          />
          <YearInput
            labelName="job-start-year"
            id="job-start-year"
            className="job-start-year"
            value={person["job-start-year"]}
            onchange={handleInputChange}
          />
        </div>
        <div className="job-end">
          <label htmlFor="job-end-month">End Date</label>
          <MonthForm
            labelName="job-end-month"
            id="job-end-month"
            className="job-end-month"
            value={person["job-end-month"]}
            onchange={handleInputChange}
          />
          <YearInput
            labelName="job-end-year"
            id="job-end-year"
            className="job-end-year"
            value={person["job-end-year"]}
            onchange={handleInputChange}
          />
        </div>
      </div>
      <label htmlFor="about-job">Description</label>
      <textarea
        name="about-job"
        id="about-job"
        value={person["about-job"]}
      ></textarea>
      <button onClick={() => handleEdit(null)}>Done</button>
    </div>
  );
}
//function accept array of employment object  return template that hold form
function EmploymentFormHolder({ data }) {
  const [employment, setEmployment] = useState(data);
  const [editingId, setEditingId] = useState(null);
  const handleClick = () => {
    let list = [...employment];
    list.push(addEducation());
    setEmployment(list);
    console.log(list);
    //save here
  };
  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (e) => {
    let list = [...employment];
    const remain = list.filter((workPlace) => workPlace.id !== e.target.id);
    //console.log(remain)
    setEmployment(remain);
    //save here
  };
  const employmentList = employment.map((work) => {
    return (
      <>
        <Employment
          key={work.id}
          id={work.id}
          data={work}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isEditing={editingId === work.id}
        />
      </>
    );
  });
  return (
    <>
      {employmentList}
      <button onClick={handleClick}>Add more</button>
    </>
  );
}

export { EmploymentInfo };
