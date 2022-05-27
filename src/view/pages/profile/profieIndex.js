import React, { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
const Profile = () => {
    const [name, setName] = useState("");

    const location = useLocation();

    useEffect(() => {
        if(location.state !== undefined) {
            setName(location.state.name);
        }
    })

    return(
        <h1>Welcome {name}</h1>
    )
}

export default Profile;