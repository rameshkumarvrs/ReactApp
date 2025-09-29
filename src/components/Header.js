import "./Header.css";

function Header() {
  const myStyle = {
      color : "red" , 
      backgroundColor: "lightblue",
      padding : "10px",
      fontFamily : "Sans-serif" 
  }
  return(
    <>
    <h1 style={myStyle}>This is mainly used for the styling</h1>
     <p>this is the p tag</p>
    
    </>
   
  )

}

export default Header