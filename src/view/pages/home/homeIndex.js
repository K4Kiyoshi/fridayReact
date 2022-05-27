import React from "react";
import { Link,useHistory } from "react-router-dom";
const Home =()=>{
    const history = useHistory();
    const gotoProfile = () =>{
                history.push("/profile", {name: "Yuwa"});
    };
    return(
        <>
        <h1>Welcome From Home!</h1>
        <center>
        <Link to={{
            pathname : "/profile",
            state : {name : "YuwaKoKo"}
        }}>Go to Profile</Link>
        <br/>
        <Link to="/fruit">Go to Fruit</Link>
        <br/>
        <button onClick={gotoProfile}>Go to Profile visa button</button>
        </center>
        </>
    )
}

export default Home;