import { useState } from "react";

function Scooter(){
    // const [color, setState] = useState("red")
    // const [brand, setBrand] = useState("benz")
    // const [year, setYear] = useState("1995")
    // const [price, setPrice] = useState("price")
    const [scooter, setScooter] = useState(
        {
            color: "red",
            brand: "benz",
            year: "1995",
            price: "10000"
        }
)

function updateColor(){

    setScooter((previousValues) => {
        return {...previousValues, color: "blue"}

    })

}
// console.log("cuurentstate", scooter)


    return <>
    <p>Color: {scooter.color}</p>
    <p>Brand: {scooter.brand}</p>
    <p>year: {scooter.year}</p>
    <p>price: {scooter.price}</p>
    <button onClick={updateColor}>Cahngecolor</button>
    </>
}
export default Scooter;

