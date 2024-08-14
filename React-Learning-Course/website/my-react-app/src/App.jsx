import Header from "./Header"
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button/Button"; // Styling with css, inline, external and modules
import Student from "./Student";

function App() {
  return(
    <> {/* Fragments tags required*/}
      <Header/>
      <Card/><br/>
      <Student name="Patrik" age={21} isStudent={true}/><br/>
      <Student name="Peter" age={57} isStudent={false}/>
      <Student/>
      <Button/>
      <br/><br/><hr/>
      <Footer/>
    </>
  );
  
}

export default App
