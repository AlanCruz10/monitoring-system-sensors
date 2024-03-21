import "../assets/styles/button.css"

function Button (props) {
    return (
        <>
        <button onClick={props.action}> {props.text} </button>
        </>
    );
}

export default Button;