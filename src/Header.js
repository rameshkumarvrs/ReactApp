import React from 'react'

const Header = (props) => {

  

  return (
    <header>

<h1>{props.title} is {props.email}</h1>

    </header>
  )
}

export default Header