import PropTypes from "prop-types"


function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.name}!</h2>;
    // }
    // else{
    //     return <h2>Welcome! Please Login to Continue</h2>;
    // }

    // Ternary operator

    return(props.isLoggedIn ? <h2>Welcome {props.name}!</h2> : <h2>Welcome! Please Login to Continue...</h2>);

}
UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    name: "Guest"
}

export default UserGreeting;