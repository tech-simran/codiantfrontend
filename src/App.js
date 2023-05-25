
import React from 'react';
import EmployeeForm from './component/EmployeeForm';
import {Routes,Route}  from "react-router-dom"
import EmployeesInfo from './component/EmployeesInfo';
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element = {<EmployeeForm/>}/>
      <Route path='/employees' element={<EmployeesInfo/>}/>
      </Routes>
    
      
    </div>
  );
}

export default App;
