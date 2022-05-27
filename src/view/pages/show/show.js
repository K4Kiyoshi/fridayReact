import React, { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
const Show = () => {
    const [name, setName] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [ph_no, setPh_no] = useState("");
    const [address, setAddress] = useState("");
    

    const location = useLocation();

    useEffect(() => {
                setName(location.state.username);
                setFullname(location.state.fullname);
                setEmail(location.state.email);
                setPh_no(location.state.ph_no);
                setAddress(location.state.address);
    })

    return(
        
        <div className ="re">
        <h1>User Profile</h1>
        <label >UserName: </label>
        <span>{name}</span><br/><br/>
        <label >FullName: </label>
        <span>{fullname}</span><br/><br/>
        <label >Email: </label>
        <span>{email}</span><br/><br/>
        <label >PhoneNo: </label>
        <span>{ph_no}</span><br/><br/>
        <label >Address: </label>
        <span>{address}</span><br/>
       
    </div>
    )
}

export default Show;
