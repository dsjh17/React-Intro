import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Dictionary(){
    const [word,setWord]= useState(" ");
    const navigate = useNavigate();
    // useEffect(()=>{
    //     console.log('State Updated' +  word + ' ' + word2);
        
    // });
    return(
        <div>
            <h3>Let's get the definition of {word}</h3>
            <input type="text" onChange={(e)=>{setWord(e.target.value)}}
            />
            <button onClick={()=>{navigate("/definition/" + word)}}>
                Search
            </button>
        
            

            


    </div>
    )
}