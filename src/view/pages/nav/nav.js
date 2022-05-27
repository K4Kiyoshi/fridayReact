import React from "react";
import { Link } from "react-router-dom";
import "./stylenav.css";

const Navbar = () => {
    return (
        <>
<div className="topnav">
  <Link to="/" > Home</Link>
  <Link to="/register" >Register </Link>
  <Link to="/employeeList"  >EmployeeList </Link>
  <Link to="/aboutus"  >About Us </Link>
</div>
        </>
    );
};
export default Navbar;
