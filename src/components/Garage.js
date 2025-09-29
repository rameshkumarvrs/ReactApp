
import Car from './Car';
import Apple from './Apple';

function Garage() {
  //const brand = 'Ferrari';
  //const color = "Red"
  const carInfo = {'brand': "Benz", "color": "pacha"}
  const appleInfo = {"type": "fiji", "color": "Karupi"}
  const carList = [
      {'brand': "Benz", "color": "green"},
      {'brand': "BMW", "color": "red"},
      {'brand': "volvo", "color": "blue"}
  ];

  const numList = [1,2,3,4,5,6]
  //const carInfo = {}
  return(
  <>
    <p>Who is in my garage pa</p>
    {/* <Car brand={brand} color={color} /> */}
    { carInfo.brand !=undefined && carInfo.color != undefined ?  
    <Car carInfo={carInfo}/> : null}
    <Apple appleInfo={appleInfo}/>
    <ul>
        {carList.map((carI) => <li key={carI.brand}><Car carInfo={carI}/></li>)}
    </ul>

    <ul>
      {numList.map((nl, index) => <p key={index}>{nl}</p>)}
    </ul>
  </>
  )
}

export default Garage