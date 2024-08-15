import React, {useState} from "react";

function OnChange(){

    const [name, setName] = useState("Guest"); //text 
    const [quantity, setQuantity] = useState(1); // number
    const [comment, setComment] = useState(""); // text area
    const [payment, setPayment] = useState(""); // Select
    const [shipping, setShipping] = useState(""); //Radio Button

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p><br/>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p><br/>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instruction"/>
            <p>Comment: {comment}</p><br/>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select :Payment Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p><br/>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />

                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );

}

export default OnChange;