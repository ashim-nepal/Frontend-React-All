import profilePicture from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            {/* <img src="https://via.placeholder.com/180" alt="Profile picture"></img> */}
            <img className='card-image' src={profilePicture} alt="Profile picture"></img>
            <h3 className='card-title'>Ashim Nepal</h3>
            <p className='card-text'>A Student learning AI!</p>

        </div>

    );


}

export default Card;