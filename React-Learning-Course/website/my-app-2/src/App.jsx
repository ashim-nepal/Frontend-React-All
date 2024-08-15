import List from "./List"
import Button from "./Button";
import ProfilePic from "./ProfilePic";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import OnChange from "./OnChange";

function App() {

  const fruits=[{id:1, name: "Apple", calories: 95},
    {id: 2, name: "Orange", calories:45},
    {id:3, name: "Grape", calories: 40},
    {id:4, name: "Banana", calories: 105}];

    const veggies=[{id:5, name: "Potatoes", calories: 110},
      {id: 6, name: "Carrots", calories:25},
      {id:7, name: "Corn", calories: 60},
      {id:8, name: "Broccoli", calories: 50}];

    const juices = [];

  return (
    <>
    <h1>Counter</h1>
    <Counter/>
    <br/><br/><br/><br/>
    <br/><br/><br/>
    <OnChange/>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {veggies.length > 0 ? <List items={veggies} category="Vegetables"/> : null}
      {juices.length > 0 ? <List items={juices} category="Juices"/> : null}
      <br/><br/>
      <Button/>
      <ProfilePic/>
      <br/><br/>
      <MyComponent/>
    </>
  )
}

export default App
