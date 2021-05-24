import logo from './logo.svg';
import './App.css';
import { Buttons } from "./reactComponents/buttons";

function App() {
  let array = []
  let num1 = ""
  let sign;
  let num2 = ""

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
     console.log(parseInt(num1), parseInt(num2));
    array = []
   }
 }

  return (
   <Buttons value={numberValue}/>
  );
}

export default App;
