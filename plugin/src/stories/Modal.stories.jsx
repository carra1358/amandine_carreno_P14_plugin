import React from 'react';
import { Modal } from "./Modal"
//import { screen, userEvent } from '@storybook/testing-library';



export default {
    title: "Component/Modal",
    component: Modal,
    argTypes: {
        handleClose: { action: "handleClose" }
    }

}

export const Template = (args) => <Modal {...args} />

export const Default = Template.bind({});

/*
Default.play = async () => {
    await userEvent.click(screen.getByTestId("close_button"))
}*/
