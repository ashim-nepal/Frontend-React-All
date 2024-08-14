import PropTypes from "prop-types"


function List(props){

    // const fruits=[{id:1, name: "Apple", calories: 95},
    //     {id: 2, name: "Orange", calories:45},
    //     {id:3, name: "Grape", calories: 40},
    //     {id:4, name: "Banana", calories: 105}];
    // fruits.sort((a,b) =>a.name.localeCompare(b.name)); // For Sorting Alphabetically
    // fruits.sort((a,b) =>b.name.localeCompare(a.name)); // For Sorting Alphabetically but reverse
    // Sorting based on calories
    // fruits.sort((a,b)=> a.calories - b.calories); // Based on calories
    // fruits.sort((a,b)=> b.calories - a.calories); // Based on caloriesReverse
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const HighCalFruits = fruits.filter(fruit => fruit.calories > 100);

    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b> </li>);


    // After Implementing props
    const category = props.category;
    const itemsList = props.items;

    const listPropsItems = itemsList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b> </li>);



    return(
        <>
        <h3>{category}</h3>
    <ol>{listPropsItems}</ol>
    </>
);

}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
    category: PropTypes.string,
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;