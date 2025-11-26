import React, { Component } from 'react'





// import ArrayExample from "./03array";

// function App() {
  
//   return (
//     <div className="p-5">




//       <ArrayExample />
//     </div>
//   );
// }

// export default App;










// import { useState } from 'react'




// import Timeoutex from './02timer'

// function App  () {
//   return (
//     <div>
//       <Timeoutex/>
//     </div>
//   )
// }

// export default App








// //                     01readchar.jsx


// import TextCheck from './01readchar'
// function App(){
//   return(
//     <div>
//       <TextCheck/>
//     </div>
//   )
// }
// export default App;




// //Statefull stores data
// function Counter(){
//   const [count,setCount]=useState(0);
//   return(
//     <div className="p-5">
//     <h1>Count:{count}</h1>
//       <button 
//       className="bg-green-500 px-4 py-2 text-2xl rounded-full" 
//       onClick={()=>setCount(count+1)}>
//         increase</button>

//         <button className="bg-red-500 px-4 py-2 text-2xl m-5 rounded-full" 
//         onClick={()=>setCount(count-1)}>
//           decrease
//         </button>
//     </div>
    
//   );
// }
// export default Counter;






//stateless use only props doesnt store data

// function Greeting({name}){
//   return(
//     <h1>Hello {name}</h1>
//   )
// };



// const App = () => {
//   return (
//      <Greeting name="nikhil"/>
//   )
// }

// export default App;










// //Event handling

// function App(){
//   function handleOnClick(){

//       alert("button clicked");

//   }
//   return(
//     <div className="flex justify-center mt-5"> 
//   <button 
//   onClick={handleOnClick}
//   className="bg-green-500 text-white px-4 py-2 justify-center">
//     clickme</button>
//   </div>
//   );
// }

// export default App;



// //React virtual DOM

// const App=()=>{
//   const [count,setCount]=useState(0);
//   return(
//   <div className="p-5">
//   <h1 className="text-2xl">Count: {count}</h1>
//   <button onClick={()=>setCount(count+1)} className="bg-green-500 px-4 py-2 rounded mt-2">
//   increase
//   </button>
//   </div>
//   );
// };

// export default App;





// //functional components


// const Welcome=()=>{
//   return <h1>Hello from functional components</h1>
// };
// export default Welcome;





//creating components passing {props}

// function Welcome({name,age}){
//   return(
//     <h1 className="text-2xl font-bold">Hi {name} you are {age} years old</h1>
//   );
// }


// const App = () => {
//   return (
//     <div className="p-5">
//       <Welcome name="Nikhil" age={23}/> 
//     </div>
//   );
// };

// export default App





{/* 

//rafce to create component

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App






//class components
use before hooks were created

import './App.css'
class Welcome extends Component{
  render (){
    return <h1>Hello</h1>
  }
}

export default Welcome; */}
