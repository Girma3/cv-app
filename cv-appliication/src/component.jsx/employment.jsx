import PropTypes from "prop-types"
import { NavTemplate, PersonalInfo } from "./personal-info"
import { useState } from "react"
let educationObj = [
    {
        id:"0",
        'user-education':"Ms",
        'user-school':"high school",
        'employer-city':"La",
        'school-start-month':"9",
        'school-start-year':"2020",
        'school-end-month':"2",
        'school-end-year':"2023",
        'about-school':"best"
    },
    {
        id:"1",
        'user-education':"dev",
        'user-school':"high school",
        'employer-city':"La",
        'school-start-month':"9",
        'school-start-year':"2020",
        'school-end-month':"2",
        'school-end-year':"2023",
        'about-school':"best"
    }
    
]
function addEducation(){
    const data =  {
        id:"3",
        'user-education':"new",
        'user-school':"high school",
        'employer-city':"La",
        'school-start-month':"9",
        'school-start-year':"2020",
        'school-end-month':"2",
        'school-end-year':"2023",
        'about-school':"best"
    }
    return data
}

let data = educationObj[0]
function EducationInfo(){
    // const educationList = educationObj.map(education =>
    //     <NavTemplate key={education.id} text={'Education'}>
    //         <EducationFormHolder/>
    //     </NavTemplate>
    // );
    return(
        <NavTemplate  text={'Education'}>
            <EducationFormHolder/>
        </NavTemplate>
    )

}
function EducationFormHolder(){
    const [education,setEducation] = useState(educationObj)
    const handleClick = () =>{
        let list = [...education]
        list.push(addEducation())
        setEducation(list)
        console.log(list)
    }
    const handleDelete = (e) => {
        
        
        
        setEducation(education.filter(ed=> ed.id !== e.target.id))
        // delete from local storage
        console.log(education)
    }
    
    const educationList = education.map(education =>{
        return(
            <Template key={education.id} title={education["user-education"]} id={education.id} handleDelete={handleDelete}>
                <>
                    <Education key={education.id}/>
                   
                </>
            </Template>
        )
    
    });
  
  
    
    return(
        <>
            
            {educationList}
            <button onClick={handleClick}>Add more</button>
        </>
    )
}
function Template({children,title,name,city,id ,handleDelete,handleEdit}){
    
    
    const [ showForm,setShowForm] = useState(false)
    const handleClick = () =>{
        setShowForm(!showForm)
    }
   
    if(showForm === true){
        return(children)
    }
    return(
        <div className="education-info flex-row">
            <div className="info">
                <div className="subject-name job-name">{title}</div>
                <div>
                    <span className="school-name work-place">{name}</span>
                    <span className="city-name">{city}</span>
                </div>
            </div>
            <div className="btn-holder flex-row">
                <button onClick={handleEdit} id={id}>edit</button>
                <button onClick={handleDelete} id={id}>delete</button>
            </div>
        </div>
    )
    
}
function Education(){
    const[person,setPerson] = useState(data);
    const handleInputChange = (e)=>{
        setPerson({...person,[e.target.name]:e.target.value})
    }
   
    return(
    
        <div className="education-form flex-column">
            <label htmlFor="user-education">Education</label>
            <input type="text" id="user-education" name="user-education" value={person['user-education']} onChange={handleInputChange}/>
            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="user-school">School</label>
                    <input type="text" id="user-school" name="user-school" value={person['user-school']} onChange={handleInputChange}/>
                </div>
                <div className="flex-column">
                    <label htmlFor="user-city">City</label>
                    <input type="text" id="user-city" name="user-city" value={person['user-city']} onChange={handleInputChange}/>
                </div>
                
            </div>
            <div className="date-holder flex-row">
                <div className="school-start">
                    <label htmlFor="school-start-month" className="school-start-label">Start Date</label>
                    <MonthForm labelName="school-start-month" id="school-start-month"  className="school-start-month" value={person['school-start-month']} onChange={handleInputChange}/>
                    <YearInput labelName="school-start-year" id="school-start-year" className="school-start-year" value={person['school-start-year']}  onChange={handleInputChange}/>
                </div>
                <div className="school-end">
                    <label htmlFor="school-end-month">End Date</label>
                    <MonthForm labelName="school-end-month" id="school-end-month" className="school-end-month" value={person['school-end-month']} onChange={handleInputChange} />
                    <YearInput labelName="school-end-year" id="school-end-year" className="school-end-year" value={person['school-end-year']} onChange={handleInputChange}/>
                </div>
                
            </div>
            <label htmlFor="about-school">Description</label>
            <textarea name="about-school" id="about-school" value={person['about-school']} onChange={handleInputChange}></textarea>
        </div>

    )
}
function YearInput({labelName="",id="0",className="" ,value="2", onChange}) {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(10),(value,index)=> currentYear - index)
    if(className === "school-end-year" || className === "job-end-year"){
        years.unshift("Present")
    }
   
    return (
        <select name={labelName} id={id} className={className} value={value} onChange = {onChange}>
    
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
}
function MonthForm({labelName='end month',id="end month",className="", value="0", onChange}){
    return(
        <>
           
            <select name={labelName} id={id} className={className} value={value} onChange={onChange}>
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

    )
}

MonthForm.propTypes = {
    labelName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value:PropTypes.string,
    onChange:PropTypes.func,

}
YearInput.propTypes = {
    labelName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value:PropTypes.string,
    onchange:PropTypes.func,
}
let employmentObj = [{
    'user-position':"Jr",
    'user-employer':"Tde",
    'employer-city':"Texas",
    'job-start-month':"9",
    'job-start-year':"2020",
    'job-end-month':"2",
    'job-end-year':"2023",
    'about-job':"good work place"

}]
let employmentData = employmentObj[0]
function EmploymentInfo(){
    return(
        <NavTemplate text={'Employment'}>
            <Employment/>
        </NavTemplate>
    )
}
function Employment(){
    const [person,setPerson] = useState(employmentData)
    const handleInputChange = (e) =>{
        setPerson({...person,[e.target.name]:e.target.value})
    }
    //save local storage
    return(
    
        <div className="employment-form flex-column">
            <label htmlFor="user-position">Position</label>
            <input type="text" id="user-position" name="user-position" value={person['user-position']} onChange={handleInputChange}/>
            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="user-employer">Employer</label>
                    <input type="text" id="user-employer" name="user-employer" value={person['user-employer']} onChange={handleInputChange}/>
                </div>
                <div className="flex-column">
                    <label htmlFor="employer-city">City</label>
                    <input type="text" id="employer-city" name="employer-city" value={person['employer-city']} onChange={handleInputChange}/>
                </div>
                
            </div>
            <div className="date-holder flex-row">
                <div className="job-start">
                    <label htmlFor="job-start-month" className="job-start-label">Start Date</label>
                    <MonthForm labelName="job-start-month" id="job-start-month"  className="job-start-month" value={person["job-start-month"]} onchange={handleInputChange}/>
                    <YearInput labelName="job-start-year" id="job-start-year" className="job-start-year" value={person["job-start-year"]} onchange={handleInputChange}/>
                </div>
                <div className="job-end">
                    <label htmlFor="job-end-month">End Date</label>
                    <MonthForm labelName="job-end-month" id="job-end-month" className="job-end-month" value={person["job-end-month"]} onchange={handleInputChange}/>
                    <YearInput labelName="job-end-year" id="job-end-year" className="job-end-year" value={person["job-end-year"]} onchange={handleInputChange}/>
                
                </div>
           
            </div>
            <label htmlFor="about-job">Description</label>
            <textarea name="about-job" id="about-job" value={person['about-job']}></textarea>
        </div>

    )
}
export{EducationInfo,EmploymentInfo}