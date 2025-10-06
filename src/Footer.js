import React from 'react'

const Footer = ({length}) => {
    const year = new Date()
  return (
    <>
     <footer>copyright by rameshkumar &copy; {year.getFullYear()}</footer>
    <p> {length} list {length == 1 ? "item" : "items" }  </p>
    </>
   
  )
}

export default Footer