import React, { Fragment, useState } from "react";

function Button(){
    const [btn,setBtn] = useState(false);
    return (
        <>

        { btn ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        :''}
        <button id="click" onClick={() => setBtn(true)}>Submit</button>
        
        </>
    )
}

export default Button;