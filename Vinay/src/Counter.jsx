import { useState } from 'react'
import "/src/Style.css"
function Counter(){

const [count,setCount]=useState(0);
let a=()=>{
    setCount(count+1);
}
let b=()=>{
    setCount(count-1);
}
const [reset,setReset]=useState(0);
let c=()=>{
    setCount(0);
}

return(
    <div id='m1'>



    <h1>Count={count}</h1>

<button id='f1'  onClick={a}><h4>Increment</h4></button>


<button id='f2' onClick={b}><h4>Decrement</h4></button>


<button id='f3' onClick={c}><h4>Reset</h4></button>


    </div>
    
);


}
export default Counter;