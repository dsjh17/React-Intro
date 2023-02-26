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
            <h3>Let's get the definition of</h3>
            <input type="text" onChange={(e)=>{setWord(e.target.value)}}
            />
            <button onClick={()=>{navigate("/definition/" + word)}} className="mx-3 my-2 px-4 py-1 text-sm text-white bg-purple-600 font-semibold rounded-full border border-purple-200">
                Search
            </button>
        
            

            


    </div>
    )
}