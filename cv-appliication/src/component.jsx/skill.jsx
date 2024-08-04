import { useState } from "react"
import { NavTemplate } from "./personal-info"
import { Form } from "./try"
let skillData = [{
    id:"0",
    'skill-name':"eng",
    level:"4"
},
{
    id:"1",
    'skill-name':"french",
    level:"5"
}]
function SkillInfo(){
    return(
        <NavTemplate text={'Skills'}>
            <SkillFormHolder  data={skillData}/>
        </NavTemplate>
    )
}


function Template({name,level,id ,handleDelete,handleEdit}){
    
    
    return(
        <div className="skill-info flex-row">
            <div className="info flex-column">
                <div className="skill-name">{name}</div>
                <div className="level">{level}</div>
            </div>   
                
            <div className="btn-holder flex-row">
                <button onClick={handleEdit}  id={id}>edit</button>
                <button onClick={handleDelete} id={id}>delete</button>
            </div>
        </div>
    )
        
    
}
function sliderValue (value){
    if(value === "0"){
        value = "Beginner"
    }
    else if(value === "1"){
        value = "Moderate"
    }
    else if(value === "2"){
        value = "Good"
    }
    else if(value === "3"){
        value = "Very Good"
    }
    else if(value === "4"){
        value = "Excellent"
    }
    return value
}

function Skill ({data,handleDelete}){
    const [skill,setSkill] = useState(data);
    const [form,setForm] = useState(false);
    const handleInputChange = (e) => setSkill({...skill,[e.target.name]:e.target.value});
    const hideForm = ()=>(setForm(!form))

    
    if(form === false){
        return(
            <Template key={skill.id} name={skill['skill-name']} id={skill.id} level={skill.level} handleEdit={hideForm} handleDelete={handleDelete}/>
        )
    }
   
    
    sliderValue(skill.level)
    return (
        <div className="skill-form flex-column">
            <label htmlFor="skill" >Skill:</label>
            <input type='text' name="skill" id="skill" value={skill['skill-name']} onChange={handleInputChange}></input>
            <label htmlFor="level">Level</label>
            <input type="range" name="level" id='level' min='0' max="5" value={skill.level}  onChange={handleInputChange}/>
            <button onClick={hideForm}>Done</button>
        </div>
    )
}
function SkillFormHolder({data}){
   
    const [skill,setSkill] = useState(data)
   
    const handleClick = () =>{
        let list = [...skill]
        //list.push(addEducation())
        setSkill(list)
        console.log(list)
        //save here
    }
    
    const handleDelete = (e) =>{
        let list = [...skill]
        const remain = list.filter(skill => skill.id !== e.target.id)
        //console.log(remain)
        setSkill(remain)
        //save here
        
    }
    const skillList = skill.map(skills =>{
       
        return(
            <>
                <Skill  data={skills} handleDelete={handleDelete}/>
               
            </>
        )
    });
    return(
        <>
            {skillList}
            <button onClick={handleClick}>Add more</button>
        </>
    )
}

export{SkillInfo}