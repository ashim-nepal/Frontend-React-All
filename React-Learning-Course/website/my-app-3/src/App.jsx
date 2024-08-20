import ArrayObjectStateUpd from "./ArrayObjectStateUpd"
import ArrayStateUpd from "./ArrayStateUpd"
import ColorPicker from "./ColorPicker"
import ComponentA from "./ComponentA"
import DigitalClock from "./DigitalClock"
import MyComponent from "./MyComponent"
import ToDoList from "./ToDoList"
import UseEffct from "./UseEffct"

function App() {

  return (
    <>
    <h1>Use Context Hook</h1>
    <ComponentA/>

    <br/><br/><br/><br/>
    <h1>Digital Clock</h1>
    <DigitalClock/>
    <br/><br/>
    <h2>Use Effect Hook in React</h2>
    <UseEffct/>
    <br/><br/><br/>
    <div><ToDoList/></div>
    <br/><br/><br/>
    <ArrayObjectStateUpd/><br/><br/>
    <ArrayStateUpd/><br/><br/>
    <MyComponent/>
    <ColorPicker/>

    </>
  )
}

export default App
