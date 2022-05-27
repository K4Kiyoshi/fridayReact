import React from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
function EmployeeList() {

     const Employee = [
        {
            id: "1",
            username: "aungkhantkyaw",
            fullname: "Aung Khant Kyaw",
            email: "aungkhantkyaw@gmail.com",
            ph_no: "09123456789",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "2",
            username: "zinminmyat",
            fullname: "Zin Min Myat",
            email: "zinminmyat@gmail.com",
            ph_no: "0948296244",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "3",
            username: "supyaemaung",
            fullname: "Su Pyae Maung",
            email: "supyaemaung@gmail.com",
            ph_no: "0992857364",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "4",
            username: "ayethirimon",
            fullname: "Aye Thiri Mon",
            email: "ayethirimon@gmail.com",
            ph_no: "092283930771",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        },
        {
            id: "5",
            username: "eieihtwe",
            fullname: "Ei Ei Htwe",
            email: "eieihtwe@gmail.com",
            ph_no: "09758917304",
            address: "No 123, Latha St, Latha Tsp, Yangon, Myanmar"
        }
    ]
    const history = useHistory();
const details = (i) => {
    history.push("/show", {id: i.id , username: i.username , fullname: i.fullname
    , email: i.email, ph_no: i.ph_no, address: i.address
    
    });
  console.log(i.id);
}
    return (
        <>
        <center>
            <h1>Employee List</h1>
        </center>
        <table className="table">
            <thead>
                <tr>
                    
                    <th>UserName</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Detail</th>
                </tr>

            </thead>
            <tbody>
            
        {Employee.map((data,index) =>{
            return (
            <tr key={index}>
            <td>{data.id}</td>
            <td>{data.fullname}</td>
            <td>{data.email}</td>
            
            <td>
                <p onClick={ ()=>details(data)}>
                Detail
            </p>
            </td>
             </tr>

            )

        })}





           </tbody>
            
        </table>
  
</>
    );
};

export default EmployeeList;
