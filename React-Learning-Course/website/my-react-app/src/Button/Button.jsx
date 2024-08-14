import styles from "./Button.module.css"

function Button(){
    // For inline css only
    const btnStyle = {
            backgroundColor: "rgb(44, 156, 220)",
            color:"white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
    }

    return(
        // <button class="button">Button Click</button> // For External CSS//
        // <button style={btnStyle}>Button Click</button> // For External CSS//
        <button className={styles.button}>Button Click</button> // For Module Based styling
    );


}

export default Button;