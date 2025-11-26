 import { useState ,useEffect } from "react";

 function Timeoutex(){
    const [message,setMessage]=useState("");

    useEffect(()=>{
    const timer = setTimeout(()=>{
            setMessage("its been 3 sec");
        },3000);
        return ()=>clearTimeout(timer);
    },[]);
return <h1>{message}</h1>;
}
export default Timeoutex;