import React, { useState } from 'react';
import AddEmployee from '../../component/AddEmployee/AddEmployee';
import EmployeeList from '../../component/EmployeeList/EmployeeList';

const Employee = ({
  displayedPage,
  showEmployeeList
}) => {

  const [employeeList, setEmployeeList] = useState([]);

  const onShowEmployeeList = (formData) => {
    const prevEmployeeList = [...employeeList];
    prevEmployeeList.push(formData);
    setEmployeeList(prevEmployeeList);
    showEmployeeList();
  }

  const removeUser = (userID) => {
    const prevEmployeeList = [...employeeList];
    const newEmployeeList = prevEmployeeList.filter(item => item.userID !== userID);
    setEmployeeList(newEmployeeList);
  }

  return (
    <>
      {displayedPage === 'show' && <EmployeeList employeeList={employeeList} removeUser={removeUser} showAddEmployee={() => showEmployeeList('add')} />}
      {displayedPage === 'add' && <AddEmployee showEmployeeList={onShowEmployeeList} />}
    </>
  )
} 

export default Employee;
