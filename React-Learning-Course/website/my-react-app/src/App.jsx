import Header from "./Header"
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button/Button"; // Styling with css, inline, external and modules

function App() {
  return(
    <> {/* Fragments tags required*/}
      <Header/>
      <Card/><br/>
      <Button/>
      <br/><br/><hr/>
      <Footer/>
    </>
  );
  
}

export default App
