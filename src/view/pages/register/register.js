import React from "react";
import "./style.css";
const Register = (props) =>{
    console.log(props)
    return(
        <div className="container">
            <h1>User Registration</h1>
            <label >UserName: </label>
            <input type="text"  onChange={(e) => props.handleChangeName(e)}/><br/>
            <label >FullName: </label>
            <input type="text"  onChange={(e) => props.handleChangeFullName(e)} /><br/>
            <label >Email: </label>
            <input type="text" onChange={(e) => props.handleChangeEmail(e)} /><br/>
            <label >PhoneNo: </label>
            <input type="text" onChange={(e) => props.handleChangePhno(e)} /><br/>
            <label >Address: </label>
            <input type="text" onChange={(e) => props.handleChangePass(e)} /><br/>
            <br />
            <button>Save</button>
        </div>
    )
}

export default Register;