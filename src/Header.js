import React from 'react'

const Header = ({title= "pachelapudungi"}) => {

  

  return (
    <header>

<h1>{title}</h1>

    </header>
  )
}

Header.defaultProps = {
  title: "pachelapudungi"
}
export default Header