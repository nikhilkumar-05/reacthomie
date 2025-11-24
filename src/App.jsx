import React, { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function Welcome({name,age}){
  return(
    <h1 className="text-2xl font-bold">Hi {name} you are {age} years old</h1>
  );
}


const App = () => {
  return (
    <div className="p-5">
      <Welcome name="Nikhil" age={23}/> 
    </div>
  );
};

export default App








{/* 

//rafce to create component

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App





use before hooks were created

import './App.css'
class Welcome extends Component{
  render (){
    return <h1>Hello</h1>
  }
}

export default Welcome; */}
