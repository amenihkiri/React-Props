import React from 'react';
import './App.css';
import Card from "./component/card" 
import Hello from "./component/hello"

 const students=[
    
   {name:"kaled",age:24,phone:202020,class:"hello"},
   {name:"bilel",age:24,phone:202020,class:"tt"},
   {name:"ines",age:24,phone:202020,class:"mm"},
    
   {name:"kaled",age:24,phone:202020,class:"hello"},
   {name:"bilel",age:24,phone:202020,class:"tt"},
   {name:"ines",age:24,phone:202020,class:"mm"},
    
   {name:"kaled",age:24,phone:202020,class:"hello"},
   {name:"bilel",age:24,phone:202020,class:"tt"},
   {name:"ines",age:24,phone:202020,class:"mm"},
  

 ] 

const y=[{desc:"hhhhhhhhhhh",parag:"jjjjjjjjjjjjj"},{desc:"hhhhhhhhhhh",parag:"jjjjjjjjjjjjj"},{desc:"hhhhhhhhhhh",parag:"jjjjjjjjjjjjj"}]


function App() {
  return (
    <div className="App">
      
  <h1>React Props</h1>
<Card x={students}/>
<Hello students={students}  y={y}/>
    </div>
   

   
    
  );
}
export default App;
