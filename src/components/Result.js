import React from "react";

function Result({secretNum, term}) {
    let result;

    if(term) {
        console.log("term", term)
     if (term > secretNum) {
         result = "high value"
     }else if(term < secretNum) {
         result = "less value"
     }else if(term == secretNum) {
         result = "super you find the Num"
     }else {
        result = "please enter valid input"
     } 
    }
    

    return(
        
        <h3>You have gusses: {result} </h3>
    )
   
}

export default Result









    
    
