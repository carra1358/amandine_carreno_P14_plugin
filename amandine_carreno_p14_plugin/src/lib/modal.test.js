import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';


describe("Given I am a developper", () => {
    describe("When I use the Modal component and set props isOpen to true ", () => {
        test("Then my Modal should be visible with default style", () => {
            render(<Modal isOpen={true} />)

            expect(screen.getByTestId("modal")).toBeTruthy();
        });
    })
});

describe("Given I am a developper", () => {
    describe("When I use the Modal component and set props isOpen to false ", () => {
        test("Then my Modal should not be visible", () => {
            render(<Modal isOpen={false} />)
            expect(screen.getByTestId("modal_container").innerHTML).toBe("");
        });
    })
});

describe("Given I am a developper", () => {
    describe("When I use the Modal component and set props isOpen to true and I have a node child ", () => {
        test("Then my Modal and node child should be visible", () => {
            render(<Modal isOpen={true}><p>message</p></Modal>)

            expect(screen.getByText("message")).toBeInTheDocument();
        });
    })
});

describe("Given I am a developper", () => {
    describe("When I use the Modal component and set customButtonShow to false ", () => {
        test("Then my Modal should have only default Button", () => {
            render(<Modal isOpen={true} customButtonShow={false}><p>message</p></Modal>)

            expect(screen.getAllByTestId("modal_footer")).toHaveLength(1)
        });
    })
});

describe("Given I am a developper", () => {
    describe("When I use the Modal component and set defaultButtonShow to false ", () => {
        test("Then my Modal should have only custom Button", () => {
            render(<Modal isOpen={true} defaultButtonShow={false}><p>message</p></Modal>)

            expect(screen.getAllByTestId("modal_footer")).toHaveLength(1)
        });
    })
});

describe("Given I am a user and the modal is visible", () => {
    describe("When I click on modal's uderlayer", () => {
        test("Then a event should be trigger", () => {
            const mockCallBack = jest.fn();

            render(<Modal isOpen={true} handleClose={mockCallBack} />)

            fireEvent.click(screen.getByTestId("modal"))
            expect(mockCallBack).toHaveBeenCalled();
        });
    })

    describe("When I click on modal's default Button", () => {
        test("Then a event should be trigger", () => {
            const mockCallBack = jest.fn();

            render(<Modal isOpen={true} handleClose={mockCallBack} />)

            fireEvent.click(screen.getByTestId("default_button"))
            expect(mockCallBack).toHaveBeenCalled();
        });
    })

    describe("When I click on modal's custom Button", () => {
        test("Then a event should be trigger", () => {
            const mockCallBack = jest.fn();

            render(<Modal isOpen={true} handleCustomClick={mockCallBack} />)

            fireEvent.click(screen.getByTestId("custom_button"))
            expect(mockCallBack).toHaveBeenCalled();
        });
    })


});

describe("Given I am developper the modal", () => {
    describe("When I use a form,set customButton type to submit and pass prop formId as form Id ", () => {
        test("Then my Modal and node child should be visible", () => {
            const mockCallBack = jest.fn();
            render(
                <Modal
                    customButtonType='submit'
                    formId='myForm'
                    handleCustomClick={mockCallBack}
                    customButtonLabel="Send"
                >
                    <form id='myForm'>
                        <label htmlFor="email">
                            email
                        </label>
                        <input type="email" id="email" />
                    </form>
                </Modal>)

            const custom_button = screen.getByTestId("custom_button");

            expect(custom_button.type).toBe("submit");
            fireEvent.click(screen.getByTestId("custom_button"))
            expect(mockCallBack).toHaveBeenCalled();
        });
    })

});