import React from "react";
import propTypes from "prop-types"
import "./modal.css"


/**
 * React.func : create a modal component
 * @property {isOpen} boolean define if element is mounted or unmounted
 * @property {close} func set isOpen to false
 * @property {Children} node insert Modal content
 * @return react function component
 */
export const Modal = ({
    isOpen,
    underlayerColor,
    dialogBackgroundColor,
    iconColor,
    iconPosition,
    iconSize,
    content,
    contentColor,
    handleClose,
}) => {


    return (
        <>
            {isOpen ? <div className="modal_bck" style={{ backgroundColor: underlayerColor }}>

                <div className={"modal_wrapper"} style={{ backgroundColor: dialogBackgroundColor }}>
                    <span className={`modal_close close_${iconPosition}`} onClick={handleClose} data-testid="close_button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={iconSize} fill={iconColor}>
                            {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>

                    </span>
                    <p className="modal_message" style={{ color: contentColor }}>{content}</p>
                </div>
            </div>
                : ""}
        </>
    )
}


export default Modal;

Modal.propTypes = {
    isOpen: propTypes.bool,
    underlayerColor: propTypes.string,
    dialogBackgroundColor: propTypes.string,
    iconColor: propTypes.string,
    iconPosition: propTypes.oneOf(["right", "left"]),
    content: propTypes.string,
    contentColor: propTypes.string,
    handleClose: propTypes.func

}

Modal.defaultProps = {
    isOpen: true,
    underlayerColor: "rgba(83, 157, 131, 0.6)",
    dialogBackgroundColor: "#FFFF",
    iconColor: "rgba(83, 157, 131, 0.6)",
    iconPosition: "right",
    iconSize: "18px",
    content: "enter your message",
    contentColor: "#243400",
}


