import "../assets/styles/button.css"

function Button(props) {
    return (
        <button type={props.type} className={props.isActive ? "active" : props.className} onClick={props.action}>
            {props.text}
            {props.icon}
        </button>
    );
}

export default Button;
