import { YearInput, MonthForm } from "./shared-component";
import { NavTemplate } from "./shared-component";
import { useState } from "react";

let educationObj = [
  {
    id: "0",
    "user-education": "Ms",
    "user-school": "high school",
    "school-place": "La",
    "school-start-month": "9",
    "school-start-year": "2020",
    "school-end-month": "2",
    "school-end-year": "2023",
    "about-school": "best",
  },
  {
    id: "1",
    "user-education": "dev",
    "user-school": "uni ",
    "school-place": "La",
    "school-start-month": "9",
    "school-start-year": "2020",
    "school-end-month": "2",
    "school-end-year": "2023",
    "about-school": "best",
  },
];
function addEducation() {
  const data = {
    id: "3",
    "user-education": "new",
    "user-school": "high school",
    "school-place": "La",
    "school-start-month": "9",
    "school-start-year": "2020",
    "school-end-month": "2",
    "school-end-year": "2023",
    "about-school": "best",
  };
  return data;
}

function EducationInfo() {
  return (
    <NavTemplate text={"Education"}>
      <EducationFormHolder data={educationObj} />
    </NavTemplate>
  );
}
// function accept array of education object info and list them
function EducationFormHolder({ data }) {
  const [education, setEducation] = useState(data);
  const [editingId, setEditingId] = useState(null);

  const handleClick = () => {
    let list = [...education];
    list.push(addEducation());
    setEducation(list);
    console.log(list);
    //save here
  };
  const handleEdit = (id) => {
    console.log(editingId);
    setEditingId(id);
    console.log(editingId);
  };

  const handleDelete = (e) => {
    let list = [...education];
    const remain = list.filter((education) => education.id !== e.target.id);
    //console.log(remain)
    setEducation(remain);
    //save here
  };
  const educationList = education.map((education) => {
    return (
      <>
        <Education
          key={education.id}
          id={education.id}
          data={education}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isEditing={editingId === education.id}
        />
      </>
    );
  });
  return (
    <>
      {educationList}
      <button onClick={handleClick}>Add more</button>
    </>
  );
}
//function that display accept education info  and function to handle edit and delete for education form
function Template({ title, name, city, id, handleDelete, handleEdit }) {
  return (
    <div className="education-info flex-row">
      <div className="info">
        <div className="subject-name job-name">{title}</div>
        <div>
          <span className="school-name work-place">{name}</span>
          <span className="city-name">{city}</span>
        </div>
      </div>
      <div className="btn-holder flex-row">
        <button onClick={() => handleEdit(id)} id={id}>
          edit
        </button>
        <button onClick={() => handleEdit(id)} id={id}>
          delete
        </button>
      </div>
    </div>
  );
}
//function accept object about education and display form or  template and accept function to delete education info
function Education({ data, handleDelete, handleEdit, isEditing, id }) {
  const [person, setPerson] = useState(data);

  const handleInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  if (!isEditing) {
    return (
      <>
        <Template
          key={person.id}
          id={id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          title={person["user-education"]}
          name={person["user-school"]}
          city={person["user-school-city"]}
        />
      </>
    );
  }
  return (
    <div className="education-form flex-column">
      <label htmlFor="user-education">Education</label>
      <input
        type="text"
        id="user-education"
        name="user-education"
        value={person["user-education"]}
        onChange={handleInputChange}
      />
      <div className="flex-row">
        <div className="flex-column">
          <label htmlFor="user-school">School</label>
          <input
            type="text"
            id="user-school"
            name="user-school"
            value={person["user-school"]}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="school-place">City</label>
          <input
            type="text"
            id="school-place"
            name="school-place"
            value={person["school-place"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="date-holder flex-row">
        <div className="school-start">
          <label htmlFor="school-start-month" className="school-start-label">
            Start Date
          </label>
          <MonthForm
            labelName="school-start-month"
            id="school-start-month"
            className="school-start-month"
            value={person["school-start-month"]}
            onChange={handleInputChange}
          />
          <YearInput
            labelName="school-start-year"
            id="school-start-year"
            className="school-start-year"
            value={person["school-start-year"]}
            onChange={handleInputChange}
          />
        </div>
        <div className="school-end">
          <label htmlFor="school-end-month">End Date</label>
          <MonthForm
            labelName="school-end-month"
            id="school-end-month"
            className="school-end-month"
            value={person["school-end-month"]}
            onChange={handleInputChange}
          />
          <YearInput
            labelName="school-end-year"
            id="school-end-year"
            className="school-end-year"
            value={person["school-end-year"]}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <label htmlFor="about-school">Description</label>
      <textarea
        name="about-school"
        id="about-school"
        value={person["about-school"]}
        onChange={handleInputChange}
      ></textarea>
      <button onClick={() => handleEdit(null)}>Done</button>
    </div>
  );
}
export { EducationInfo };
