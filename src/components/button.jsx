import "../assets/styles/button.css"

function Button(props) {
    return (
        <button className={props.isActive ? "active" : props.className} onClick={props.action}>
            {props.text}
        </button>
    );
}

export default Button;
