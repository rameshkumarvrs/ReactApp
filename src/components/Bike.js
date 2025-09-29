import React from "react";

class Bike extends React.Component {

  constructor() {
    super()
    this.state = {color: "red", model: "benz"}
  }


   render() {
    
    
     return <>
        
    <h1>My color is {this.state.color} and model is {this.state.model}</h1>
    <button onClick={() => { this.setState((prevData) => {return {...prevData, color: "blue"}})}}>change color</button>
    </>
    
   }
}

export default Bike;