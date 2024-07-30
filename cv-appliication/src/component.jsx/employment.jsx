import PropTypes from "prop-types"
function Template(){
    return(
        <>
            <div className="info">
                <div>cs</div>
                <div>
                    <span>odin</span>
                    <span>la</span>
                </div>
            </div>
            <button>edit</button>
        </>
    )
}
function Education(){
    return(
    
        <div className="education-form flex-column">
            <label htmlFor="user-education">Education</label>
            <input type="text" id="user-education" name="user-education"/>
            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="user-school">School</label>
                    <input type="text" id="user-school" name="user-school"/>
                </div>
                <div className="flex-column">
                    <label htmlFor="user-city">City</label>
                    <input type="text" id="user-city" name="user-city"/>
                </div>
                
            </div>
            <div className="date-holder flex-row">
                <div className="school-start">
                    <label htmlFor="school-start-month" className="school-start-label">Start Date</label>
                    <MonthForm labelName="school-start-month" id="school-start-month"  className="school-start-month"/>
                    <YearInput labelName="school-start-year" id="school-start-year" className="school-start-year"/>
                </div>
                <div className="school-end">
                    <label htmlFor="school-end-month">End Date</label>
                    <MonthForm labelName="school-end-month" id="school-end-month" className="school-end-month" />
                    <YearInput labelName="school-end-year" id="school-end-year" className="school-end-year"/>
                </div>
            </div>
            <label htmlFor="about-school">Description</label>
            <textarea name="about-school" id="about-school"></textarea>
        </div>

    )
}
function YearInput({labelName="",id="0",className=""}) {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(10),(value,index)=> currentYear - index)
    return (
        <select name={labelName} id={id} className={className}>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
}
function MonthForm({labelName='end month',id="end month",className=""}){
    return(
        <>
           
            <select name={labelName} id={id} className={className}>
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
    className: PropTypes.string.isRequired
}
YearInput.propTypes = {
    labelName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
function Employment(){
    return(
    
        <div className="employment-form flex-column">
            <label htmlFor="user-position">Position</label>
            <input type="text" id="user-position" name="user-position"/>
            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="user-employer">Employer</label>
                    <input type="text" id="user-employer" name="user-employer"/>
                </div>
                <div className="flex-column">
                    <label htmlFor="user-employed-city">City</label>
                    <input type="text" id="user-employed-city" name="user-employed-city"/>
                </div>
                
            </div>
            <div className="date-holder flex-row">
                <div className="job-start">
                    <label htmlFor="job-start-month" className="job-start-label">Start Date</label>
                    <MonthForm labelName="job-start-month" id="job-start-month"  className="job-start-month"/>
                    <YearInput labelName="job-start-year" id="job-start-year" className="job-start-year"/>
                </div>
                <div className="job-end">
                    <label htmlFor="job-end-month">End Date</label>
                    <MonthForm labelName="job-end-month" id="job-end-month" className="job-end-month" />
                    <YearInput labelName="job-end-year" id="job-end-year" className="job-end-year"/>
                </div>
            </div>
            <label htmlFor="about-job">Description</label>
            <textarea name="about-job" id="about-job"></textarea>
        </div>

    )
}
export{Education,Employment}