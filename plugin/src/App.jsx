import React from 'react';
import { useState } from 'react';
import Modal from "./stories/Modal";



function App() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <Modal isOpen={open} handleClose={() => setOpen(false)} customButtonShow={false} />
        </>
    )
}

export default App;