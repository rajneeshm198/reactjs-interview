import React from 'react';

const EmployeeList = ({
  employeeList,
  removeUser,
  showAddEmployee
}) => {

  const onRemoveUser = (userID, userName) => {
    const confirmation = window.confirm(`Do you want to remove user (${userName})`);

    if (confirmation) {
      removeUser(userID);
    }

  }

  return (
    <div>
      {employeeList.map(item => (
        <div className='employeeRecord'>
          <div className='userRecord'>FirstName: {item.firstName || ''}</div>
          <div className='userRecord'>LastName: {item.lastName || ''}</div>
          <div className='userRecord'>DOB: {item.DOB || ''}</div>
          <div className='userRecord'>Designation: {item.designation || ''}</div>
          <div className='userRecord'>Experience: {item.experience || ''}</div>
          <div className='userRecord'><span>Profile Pic:</span>
            <img src={item.imageSrc} title={item.title} width="40px" height="40px" />
          </div>

          <button onClick={() => onRemoveUser(item.userID, item.firstName)} style={{ marginRight: '10px' }}>Remove User</button>
          <button onClick={showAddEmployee}>Add User</button>
        </div>
      ))}
    </div>
  )
};

export default EmployeeList;
