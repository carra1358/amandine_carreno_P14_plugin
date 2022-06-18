import React from 'react';
import { Modal } from "../lib/Modal"


export default {
    title: "Component/Modal",
    component: Modal,
    argTypes: {
        handleClose: {
            description: "function to handle closing event",
            action: "handleClose"
        },
        handleCustomClick: {
            description: "function to handle customized event like submission, cancel, etc... ",
            action: "handleCustomClick"
        },
        isOpen: {
            description: "display of the modal",
        },
        underlayerWidth: {
            description: "width of underlayer",
        },
        underlayerHeight: {
            description: "height of underlayer",
        },
        size: {
            description: "width size of dialog",
        },
        underlayerColor: {
            description: "modal uderlayer color",
        },
        dialogBackgroundColor: {
            description: "modal dialog color",
        },
        title: {
            description: "modal header text content",
        },
        iconColor: {
            description: "modal cross icon color",
        },
        children: {
            description: "act as modal main content ",
        },
        customButtonLabel: {
            description: " customizable button label ",
        },
        customButtonBackgroundColor: {
            description: " customizable button background color",
        },
        customButtonColor: {
            description: " customizable button text color ",
        },
        customButtonMargin: {
            description: " customizable button margin ",
        },
        defaultButtonShow: {
            description: " display no customizable button ",
        },
        customButtonShow: {
            description: " display customizable button ",
        },
        formId: {
            description: "link form in main content and  customizable button ",
        },
        customButtonType: {
            description: "customizable button type",
        },
    }

}


export const Default = (args) => {
    return (
        <div style={{ height: "500px " }}>
            <Modal {...args} underlayerHeight="470px" title="Message"><p style={{ textAlign: "center" }}>Press "Ok" to confirm your action</p> </Modal>
        </div >

    )
}


export const Simple = (args) => (
    <div style={{ height: "400px " }}>
        <Modal customButtonShow={false} defaultButtonShow={false} title='' {...args} underlayerHeight="370px" size='S'>
            <p style={{ textAlign: "center" }}>Some text here</p>
        </Modal>
    </div>

)

export const Form = (args) => (
    <div style={{ height: "500px " }}>
        <Modal
            {...args}
            title="Contact Form"
            underlayerHeight='470px'
            size='M'
            customButtonType='submit'
            formId='myForm'
            handleCustomClick={(e) => e.preventDefault()}
            customButtonLabel="Send"
        >
            <form id='myForm' style={{ display: "flex", flexDirection: "column", margin: "1em 0" }}>
                <label htmlFor="email" style={{ margin: " 0 0 0.5em 0" }}>
                    email
                </label>
                <input type="email" id="email" />
                <label htmlFor="text" style={{ margin: "0.5em 0" }}>
                    message
                </label>
                <input type="textarea" style={{ height: "150px" }} />
            </form>
        </Modal>
    </div >

)

