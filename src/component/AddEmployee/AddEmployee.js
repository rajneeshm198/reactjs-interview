import React, { useState } from 'react';
import './AddEmployee.css';

const AddEmployee = ({
  showEmployeeList
}) => {

  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    formData['userID'] = Math.random();
    showEmployeeList(formData);
    event.preventDefault();
  }

  const handleChange = (value, input) => {
    const newFormData = { ...formData };
    newFormData[input] = value;
    setFormData(newFormData);
  }

  const handleFileChange = (event) => {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    // var imgtag = document.getElementById("myimage");
    // imgtag.title = selectedFile.name;

    reader.onload = function (event) {
      const newFormData = { ...formData };
      newFormData['imageSrc'] = event.target.result;
      newFormData['imageTitle'] = selectedFile.name;
      setFormData(newFormData);
    };

    reader.readAsDataURL(selectedFile);
  }

  return (
    <div>
      <h1 className="text-center">Add Employee</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData['firstName']} onChange={(event) => handleChange(event.target.value, 'firstName')} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={formData['lastName']} onChange={(event) => handleChange(event.target.value, 'lastName')} />
        </label>

        <label>
          DB:
          <input type="date" name="DOB" value={formData['DOB']} onChange={(event) => handleChange(event.target.value, 'DOB')} />
        </label>

        <label>
          Designation:
          <input type="text" name="designation" value={formData['designation']} onChange={(event) => handleChange(event.target.value, 'designation')} />
        </label>

        <label>
          Experience:
          <input type="text" name="experience" value={formData['experience']} onChange={(event) => handleChange(event.target.value, 'experience')} />
        </label>

        <label>
          Profile Picture:
          <input type="file" name="profilePic" accept='.jpg' onChange={(event) => handleFileChange(event)} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default AddEmployee;
