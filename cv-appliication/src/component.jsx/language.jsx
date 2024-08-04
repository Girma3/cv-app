import { useState } from "react"
import { NavTemplate } from "./personal-info"

let languageData = [{
    id:"0",
    'language-speak':"eng",
    level:"4"
},
{
    id:"1",
    'language-speak':"french",
    level:"5"
}]
function LanguageInfo(){
    return(
        <NavTemplate text={'Language'}>
            <LanguageFormHolder  data={languageData}/>
        </NavTemplate>
    )
}


function Template({name,level,id ,handleDelete,handleEdit}){
    
    
    return(
        <div className="language-info flex-row">
            <div className="info flex-column">
                <div className="language-name">{name}</div>
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

function Language ({data,handleDelete}){
    const [lang,setLang] = useState(data);
    const [form,setForm] = useState(false);
    const handleInputChange = (e) => setLang({...lang,[e.target.name]:e.target.value});
    const hideForm = ()=>(setForm(!form))

    
    if(form === false){
        return(
            <Template key={lang.id} name={lang['language-speak']} id={lang.id} level={lang.level} handleEdit={hideForm} handleDelete={handleDelete}/>
        )
    }
   
    
    sliderValue(lang.level)
    return (
        <div className="lang-form flex-column">
            <label htmlFor="language-speak" >Language:</label>
            <input type='text' name="language-speak" id="language-speak" value={lang['language-speak']} onChange={handleInputChange}></input>
            <label htmlFor="level">Level</label>
            <input type="range" name="level" id='level' min='0' max="5" value={lang.level}  onChange={handleInputChange}/>
            <button onClick={hideForm}>Done</button>
        </div>
    )
}
function LanguageFormHolder({data}){
   
    const [lang,setLang] = useState(data)
   
    const handleClick = () =>{
        let list = [...lang]
        //list.push(addEducation())
        setLang(list)
        console.log(list)
        //save here
    }
    
    const handleDelete = (e) =>{
        let list = [...lang]
        const remain = list.filter(lang => lang.id !== e.target.id)
        //console.log(remain)
        setSkill(remain)
        //save here
        
    }
    const languageList = lang.map(speaks =>{
       
        return(
            <>
                <Language  data={speaks} handleDelete={handleDelete}/>
               
            </>
        )
    });
    return(
        <>
            {languageList}
            <button onClick={handleClick}>Add more</button>
        </>
    )
}

export{LanguageInfo}