import Header from "./Header"
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button/Button.jsx"
import Student from "./Student"
import UserGreeting from "./UserGreeting";

function App() {
  return(
    <> {/* Fragments tags required*/}
      <Header/>
      <Card/><br/>
      <Student name="Patrik" age={21} isStudent={true}/><br/>
      <Student name="Peter" age={57} isStudent={false}/>
      <Student/><br/><br/>
      <UserGreeting isLoggedIn={true} name="Ashim"/>
      <UserGreeting/>
      <Button/>
      <br/><br/><hr/>
      <Footer/>
    </>
  );
  
}

export default App
