import React from 'react'

export const Buttons = (props) => {
    return (
        <div>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>1</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>2</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>3</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>4</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>5</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>6</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>7</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>8</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>9</button>
           <button onClick={(e)=>{e.preventDefault(); props.value(e.target.innerHTML, false)}}>0</button>
           <hr></hr>

           <button onClick={(e)=>{props.value(e.target.innerHTML, true);}}>+</button>
           <button onClick={(e)=>{
               props.value(e.target.innerHTML, true); 
               props.calculate()
               
               }}>=</button>

        </div>
    )
}
