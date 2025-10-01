import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const {id} = useParams()
    return(
        <>
            <p>This is the User component Mr Rameshkumar</p>
            <p><b>Hi user id is: {id}</b></p>
        </>
       
    )
}