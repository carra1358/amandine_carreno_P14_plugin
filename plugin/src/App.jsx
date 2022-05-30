import React from 'react';
import { useState } from 'react';
import Modal from "./stories/Modal";



function App() {
    //  const [open, setOpen] = useState(false)

    //<Modal isOpen={open} handleClose={() => setOpen(false)} />
    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>

        </>
    )
}

export default App;