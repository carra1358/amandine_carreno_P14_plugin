import React from "react";
import propTypes from "prop-types"





/**
 * 
 * Create a  modal with React.
 * 
 * 
*/
export const Modal = ({
    isOpen,
    size,
    underlayerColor,
    underlayerWidth,
    underlayerHeight,
    dialogBackgroundColor,
    iconColor,
    children,
    title,
    handleClose,
    handleCustomClick,
    customButtonLabel,
    defaultButtonLabel,
    customButtonBackgroundColor,
    customButtonColor,
    customButtonMargin,
    defaultButtonShow,
    customButtonShow,
    customButtonType,
    formId

}) => {


    return (
        <div data-testid="modal_container">
            {isOpen ? <div className="modal_underlayer" style={{ backgroundColor: underlayerColor, height: underlayerHeight, width: underlayerWidth }} onClick={handleClose} data-testid="modal">

                <div className={`modal_container ${size}`} style={{ backgroundColor: dialogBackgroundColor }}>
                    <div className="modal_header">
                        <span className="modal_close" onClick={handleClose} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" fill={iconColor} data-testid="icon">
                                {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                            </svg>
                        </span>
                        <h4 className="modal_title">{title}</h4>
                    </div>
                    {children}
                    <div className="modal_footer" data-testid="modal_footer">
                        {customButtonShow ? customButtonType === "submit" ?
                            <button onClick={handleCustomClick} type={customButtonType} form={formId} className="modal_button_footer" style={{ backgroundColor: customButtonBackgroundColor, color: customButtonColor, margin: customButtonMargin }} data-testid="custom_button">{customButtonLabel}</button>
                            : <button onClick={handleCustomClick} className="modal_button_footer" style={{ backgroundColor: customButtonBackgroundColor, color: customButtonColor, margin: customButtonMargin }} data-testid="custom_button">{customButtonLabel}</button>
                            : null}
                        {defaultButtonShow ? <button onClick={handleClose} style={{ backgroundColor: underlayerColor, color: dialogBackgroundColor }} className="modal_button_footer modal_button_default " data-testid="default_button"><span style={{ color: dialogBackgroundColor }}>{defaultButtonLabel}</span></button> : null}
                    </div>
                </div>
            </div>
                : ""}
        </div>
    )
}


export default Modal;

Modal.propTypes = {
    isOpen: propTypes.bool,
    size: propTypes.oneOf(["L", "M", "S"]),
    underlayerColor: propTypes.string,
    underlayerWidth: propTypes.string,
    underlayerHeight: propTypes.string,
    dialogBackgroundColor: propTypes.string,
    title: propTypes.string,
    iconColor: propTypes.string,
    defaultButtonLabel: propTypes.string,
    handleClose: propTypes.func,
    children: propTypes.node,
    handleCustomClick: propTypes.func,
    customButtonLabel: propTypes.string,
    customButtonBackgroundColor: propTypes.string,
    customButtonColor: propTypes.string,
    customButtonMargin: propTypes.string,
    defaultButtonShow: propTypes.bool,
    customButtonShow: propTypes.bool,
    formId: propTypes.string,
    customButtonType: propTypes.string,
}

Modal.defaultProps = {
    isOpen: true,
    defaultButtonShow: true,
    customButtonShow: true,
    underlayerColor: "rgba(83, 157, 131, 0.6)",
    underlayerWidth: "100%",
    underlayerHeight: "100%",
    dialogBackgroundColor: "#FFFF",
    iconColor: "rgba(83, 157, 131, 0.6)",
    content: "enter your message",
    contentColor: "#243400",
    title: "Title",
    customButtonLabel: "Ok",
    defaultButtonLabel: "Close"


}


