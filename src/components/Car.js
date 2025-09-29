function Car(props) {

    //const { brand, color } = props
    
    const {carInfo} = props
    const { brand, color } = carInfo

  
  //const text =  `Hi I am a ${carInfo.color} ${carInfo.brand} car`;
  const text =  `Hi I am a ${color} ${brand} car`;

  return(
     <h2>{text}</h2>
  )

}

export default Car
