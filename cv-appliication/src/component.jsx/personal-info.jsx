import { useState } from "react"


function PersonalInfo(){
    const [showMore,setShowMore] = useState(false)
    function handleMoreClick() {
        setShowMore(!showMore);
    }
   
    return(
        <div className="cv-name">
            <div className="person-info-holder flex-row">
                <div>Personal-Info</div>
                <button onClick={handleMoreClick}>+</button>
            </div>
            {showMore && <PersonalInfoForm/>}
    
        </div>
    )
}
function PersonalInfoForm(){
    const [showMore,setShowMore] = useState(false)
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return(
        <>
            <div className="personal-info-form flex-row">

                <div className="image-holder">
                    <ProfilePic/> 
                </div>
                <div className="header-form flex-column">
                    <PrimaryForm/>
                </div>
            
            </div>
            <div className="flex-column">
                <SecondForm/>
            </div>
        </>
       
    )
}
const imagePath = {image:""};

function ProfilePic(){
    const [showImage,setImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState(false);
    const [showMore,setShowMore] = useState(false)

    function handleMoreClick() {
        setShowMore(!showMore);
        
    }

    const handleImageChange = (e) => {
        e.preventDefault()
        console.log(e.target.files)
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
        imagePath.image = URL.createObjectURL(e.target.files[0])
        console.log(imagePath)
        setImage(true)
        setShowMore(false)
        
    };
    return(
    
        
   
   
        <div className="flex-column">
            {
                showImage === false &&
               <button className="add-image" onClick={handleMoreClick}>+</button>
            }
                
           
            {
                showMore &&
                    <>
                        <label htmlFor="user-photo">profile picture:</label>
                        <input type="file" name="user-photo" id="user-photo" onChange={handleImageChange} className="pic-upload-btn"/>
                    </>
            }

            {
                showImage &&
                 <div className="photo-set flex-row" >
                     <h1 className="photo-title">Photo</h1>
                     <div>
                         <button className="edit-photo">edit</button>
                         <button className="delete-photo">delete</button>
                     </div>
                 </div>
            }
            {showImage &&
             <img src={selectedImage} alt="Profile-picture" className="profile-pic" />
             
            }
               
               
        </div>
           
        
        
    )
}
function PrimaryForm(){
    return(
        <>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" autoComplete="name" placeholder="name" />
            <label htmlFor="user-email">Email</label>
            <input type="email" id="user-email" name="user-email" autoComplete="email"  />
        </>
    )
}
function SecondForm(){
    return(
        <>
            <label htmlFor="summary">Head Line</label>
            <input type="text" id="summary" name="summary" autoComplete="summary"  />

            <label htmlFor="user-phone">Phone Number</label>
            <input type="tel" id="user-phone" name="user-phone" autoComplete="phone"  /> 

            <label htmlFor="user-country">Address</label>
            <input type="text" id="user-country" name="user-country" autoComplete="country-name"  /> 

            <label htmlFor="user-city">City</label>
            <input type="text"  id="user-city" name="user-city" autoComplete="address"  /> 

            <label htmlFor="user-website">Website</label>
            <input type="url" id="user-website" name="user-website" autoComplete="website"  /> 
        </>
    )
}
function Ter(){
    const showMore = false;
    return (
        <div>
            {showMore ? <div>pussy</div> : <div>ass</div>}
        </div>
    );
}
export {PersonalInfo}