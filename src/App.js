import logo from './logo.svg';
import './App.css';
import { Buttons } from "./reactComponents/buttons";

import { React, useState } from "react";

function App() {
  let numArray = []
  let array = []
  let sign = []
  let number = "" 
  
  const [sum, setsum] = useState(0)
 
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

  if (num !== "=" || num !== "+"){
    console.log(num);
    array.push(num)
    console.log(array);
  }

  else if(num == "+") {
    sign.push(num)
    console.log(sign);
  }

   if(makeNum == true){
    //  array.forEach(eachNum => {
    //    if (eachNum !== "+"){
    //     if (sign){
    //       num2 = num2.concat(eachNum)
    //     }
    //     else{
    //       num1 = num1.concat(eachNum)
    //     }
        
      //  }
      //  else{
      //    sign = eachNum
      //  }
       
    //  });
    array.forEach((eachNum)=>{
        number = number.concat(eachNum)
        console.log(number);
  })

    number = parseInt(number)
    numArray.push(number) 
    number = ""

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
