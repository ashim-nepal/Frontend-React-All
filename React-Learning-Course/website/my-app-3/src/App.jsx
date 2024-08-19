import ArrayObjectStateUpd from "./ArrayObjectStateUpd"
import ArrayStateUpd from "./ArrayStateUpd"
import ColorPicker from "./ColorPicker"
import MyComponent from "./MyComponent"
import ToDoList from "./ToDoList"
import UseEffct from "./UseEffct"

function App() {

  return (
    <>
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
