import logo from './logo.svg';
import './App.css';
import { Buttons } from "./reactComponents/buttons";

import { React, useState } from "react";

function App() {
  let numArray = []
  let array = []
  let num1 = ""
  let sign;
  let num2 = ""
  
  const [sum, setsum] = useState(0)
 
function calculate() {
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  setsum(num1 + num2)
  num1 = ""
  num2 = ""
}

 function numberValue(num, makeNum) {
   
   array.push(num)
   console.log(array);

   if(makeNum == true){
     array.forEach(eachNum => {
       if (eachNum !== "+"){
        if (sign){
          num2 = num2.concat(eachNum)
        }
        else{
          num1 = num1.concat(eachNum)
        }
        
       }
       else{
         sign = eachNum
       }
       
     });
     numArray.push(num1)
     numArray.push(num2)
    array = []
   }
 }

  return (
    <>
    <h1>{sum}</h1>
   <Buttons value={numberValue} calculate={calculate}/>
   </>
  );
}

export default App;
