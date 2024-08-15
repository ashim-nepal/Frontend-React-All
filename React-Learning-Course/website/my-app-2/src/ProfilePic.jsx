

function ProfilePic(){

    const imageurl = "./src/assets/profile.jpg";

    const handleClick = (e)=> e.target.style.display= "none";

    return(<img onClick={(e)=> handleClick(e)} src={imageurl} height="180px" width="160px"/>);

}

export default ProfilePic;