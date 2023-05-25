import React, { useState } from 'react';
import axios from "axios"
const EmployeeForm = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [address,setAddress] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const submitForm = async ()=>{
        const data = {name,email,address,password,age}
        const response = await axios.post("http://localhost:6060/addemployee",data)
        console.log("response",response)
        // console.log(name,email,address,password,age)
    }
    
    return (
        <div>
            <form>
                <div>
                <label>Name:</label>
                <input type='text' value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                <label>Age:</label>
                <input type='text' value={age} name='age' onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div>
                <label>Address:</label>
                <input type='text' value={address} name='address' onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div>
                <label>email:</label>
                <input type='email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label>Password:</label>
                <input type='password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={()=>submitForm()}>Submit</button>
            </form>
        </div>
    );
}

export default EmployeeForm;
