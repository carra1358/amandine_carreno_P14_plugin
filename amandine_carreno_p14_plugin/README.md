# Modal_Plugin

## Cursus OpenClassrooms: Project 14

This plugin is a part of the project 14 HrNet.
You will me able to create easily a customizable Modal component.

# Modal_Plugin

## Cursus OpenClassrooms: Project 14

This plugin is a part of the project 14 HrNet.
You will me able to create easily a customizable Modal component.

##  Installation
```
 npm i amandine_carreno_p14_modal_plugin 
```

##  Usage
This is  an example for a simple usage of the Modal component. 
To show the Modal you have do use the propertie "isOpen" and set it to true and
to remove the Modal you have to pass a callback to set "isOpen" at false. You can Embeded the node element of your choice as modal's content.
```
// import Component
import { Modal } from "amandine_carreno_p14_modal_lib"
// import style
import "amandine_carreno_p14_modal_lib/dist/index.css"

function App() {
    // constent that handles the state of the modal
    const [open, setOpen] = useState(false)
 return (
        <> 
            <button onClick={() => setOpen(true)}>Open</button>
            
            <Modal isOpen={open} 
            handleClose={() => setOpen(false)}
            customButtonShow={false}>            
            <p>Your Message</p>
            </Modal>
        </>
    )
}
```
## Properties
|Name      | Type   | Default.   |Description                                                                 | 
|----------|-------  |----------|--------------------------------|
|isOpen| bool| true | Display of the modal|
|defaultButtonShow| bool| true | Display default button which only supports function to close the modal|
|customButtonShow| bool| true | display customizable button|
|handleClose| func| -- | Function that handles closing events on under layer, cross icon and default closing button|
|handleCustomClick| func| -- | Function that handles event on custom button can be used as submit, cancel, etc..|
|children|node| --| Modal main content|
|title|string|-- | Modal Modal header text content|
|defaultButtonLabel|string| "Close"| default button text label|
|customButtonLabel|string| "OK"| custom button text label|
|size|["L", "M", "S"]| --| Apply class to change dialog window's width|
| underlayerColor | string | "rgba(83, 157, 131, 0.6)" | Modal uderlayer color|
|underlayerWidth|string|"100%" | Width of under layer|
|underlayerHeight|string|"100%" | Height of under layer|
|dialogBackgroundColor|string|"#FFFF" | Modal dialog color|
|iconColor|string| "rgba(83, 157, 131, 0.6)"| Modal cross icon color|
|customButtonBackgroundColor|string| --| Customizable button background color|
|customButtonColor|string| --| Customizable button text color|
|customButtonMargin|string| --| Customizable button margin|
|customButtonType|string| "button"| Customizable button type if "submit" propertie formId is needed |
|formId|string| -- | Required to link form in modal content and customizable button|

## Notes
this package use React and StoryBook.
link to my project : https://github.com/carra1358/amandine_carreno_p14_02_05_2022

## Author

Amandine Carreno