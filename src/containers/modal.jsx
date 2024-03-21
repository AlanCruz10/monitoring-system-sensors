import "../assets/styles/modal.css"

function Modal ({children}) {
    return (
        <>
            <div className="container-modal">
                {children}
            </div>
        </>
    )
}

export default Modal;