import { useState } from "react";



function TextCheck(){
    const [text,setText]=useState("");
    const handleChange = (e)=> {
        setText(e.target.value);
    }

    const checkLength = ()=> {
    const len =text.length;
    if(len<20){
        alert("too short");
    }else{
        alert("enough");
    }
    }

    return(

        <div>
            <textarea
            value={text}
            onChange={handleChange}
            rows="10"
            cols="168"
            placeholder="type here"
            className="bg-green-500"
            ></textarea>
            <div>Count: {text.length}</div>
            <button className="bg-green-500 px-4 py-2 rounded" onClick={checkLength}>check</button>
        </div>
    )
}

export default TextCheck;