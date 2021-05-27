import logo from './logo.svg';
import './App.css';
import { Buttons } from "./reactComponents/buttons";

import { React, useState } from "react";

function App() {
  let newNum = "";
  let numArray = []
  let sign = []
  let number = ""
  
  const [sum, setsum] = useState(newNum)
 
function calculate() {
  console.log(numArray);
  //add the array elements
  let numsum = 0
  for (let i = 0; i < numArray.length; i++) {
    //calc sum
    numsum = numsum + numArray [i]
    
  }
  setsum(numsum)
  console.log(numsum);
}



function numberValue(num, makeNum) {
 console.log(typeof num);

  if(num !== "=" && num !== "+"){
    console.log(number);
    newNum = newNum.concat(num)
    console.log(newNum);
  }

  else if(num == "+") {
    sign.push(num)
    console.log(sign);
  }

  if(makeNum == true){
    let newno = parseInt(newNum)
    console.log(newno);
    numArray.push(newno)
    newNum = ""
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
