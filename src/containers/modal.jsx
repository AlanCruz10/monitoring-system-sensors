import "../assets/styles/modal.css"

function Modal (props) {
    return (
        <>
            <div className={props.className}>
                {props.children}
            </div>
        </>
    )
}

export default Modal;