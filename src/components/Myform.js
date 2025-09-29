import { useState } from "react"

export default function MyForm() {
    // const [name, setName] = useState("")
    // const [age, setAge] = useState("")
    //  const [email, setEmail] = useState("")
    // console.log("currentstate", name)
    const [inputs, setInputs] = useState({})
  
     function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submited")
        // console.log("currentstate", name, age, email)
        console.log("starevalue", inputs)
     }

     function handleChange(e) {
        const name = e.target.name
        const  value = e.target.value

        setInputs((prevState) => { return {...prevState, [name] : value}
         
        })
     }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter your name: <input type="text" name="name" onChange={handleChange}/></label><br />
         <label htmlFor="">Enter your Age: <input type="text" name="age" onChange= {handleChange}/></label><br />
          <label htmlFor="">Enter your Email: <input type="text" name="email" onChange= {handleChange}/></label><br />
        <input type="submit"  value="submit Form"/>
    </form>
}