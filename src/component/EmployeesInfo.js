import React, { useEffect, useState } from 'react';
import axios from "axios"
import Paggination from './Paggination';
const EmployeesInfo = () => {
    const [data,setData] = useState([])
   const [currentPage,setCurrentPage] = useState(1)
   const [recordPerPage] = useState(5);
   const indexOfLastRecord = currentPage*recordPerPage;
   const indexOfFirstRecord = indexOfLastRecord-recordPerPage
   const currentPageRecord = data.slice(indexOfFirstRecord,indexOfLastRecord)
   const nPages = Math.ceil(data.length/recordPerPage)
    const employeeData = async ()=>{
        try {
            const response = await axios.get("http://localhost:6060/employees")
            console.log("response",response.data.response)
            setData(response.data.response)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteEmployee = async (id)=>{
        try {
            console.log("id",id)
            const response = await axios.delete(`http://localhost:6060/deleteemploye/${id}`)
            console.log("response",response)
            employeeData()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        employeeData()
    },[])
    return (
        <div>
            <h1>Employess Information</h1>
            <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Email</th>
               </tr>
                </thead>
               
               <tbody>
              
                {
                   currentPageRecord.map((item)=>{
                    const {name,age,address,email,id} = item;
                    return(
                        <>
                       

                       <tr>
                       <td>{name}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{email}</td>
                        <button onClick={()=>deleteEmployee(id)}>Delete</button>
                       </tr>
                        
                        
                        </>

                    )
                }) 
                }
              

               </tbody>
                          </table>
           <Paggination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
}

export default EmployeesInfo;
