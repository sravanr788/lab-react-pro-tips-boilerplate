import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  // state to check if the form is submitted
  const [formSubmit, setFormSubmit] = useState(false);

  // state to keep track of all errors
  const [formErr, setFormErr] = useState({});

  // state to keep all form data
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
  });

  // function to store all the values of input in the formData object
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit function
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let errors = validate(formData);
    setFormErr(errors);

    let errorKeyArray = Object.keys(errors);
    if (errorKeyArray.length === 0) {
      toast('Form submitted Successfully!');
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    // make an error object
    let error = {};

    if (data.firstName.trim() === '') {
      error.firstName = 'Please enter your First Name';
    }
    if (data.lastName.trim() === '') {
      error.lastName = 'Please enter your Last Name';
    }
    if (data.email.trim() === '') {
      error.email = 'Please enter your Email';
    }
    if (data.phoneNo.trim() === '') {
      error.phoneNo = 'Please Enter your phone number';
      toast('Please Enter your phone number');
    } else if (!/^\d{10}$/.test(data.phoneNo.trim())) {
      error.phoneNo = 'Please enter a valid 10-digit Phone number';
      toast('Please enter a valid 10-digit Phone number');
    }
    return error;
  };

  return (
    <div className='form-container'>
      <ToastContainer />
      <fieldset>
        <legend>Fill this Form</legend>
        <form onSubmit={formSubmitHandler}>
          {/* Success Message */}
          {formSubmit && (
            <div className='success'>
              <p>Registration Successful</p>
            </div>
          )}

          <label>First Name</label>
          <input type='text' name='firstName' onChange={handleInputChange} />
          {formErr.firstName && <p className='err'>{formErr.firstName}</p>}

          <label>Last Name</label>
          <input type='text' name='lastName' onChange={handleInputChange} />
          {formErr.lastName && <p className='err'>{formErr.lastName}</p>}

          <label>Email</label>
          <input type='email' name='email' onChange={handleInputChange} />
          {formErr.email && <p className='err'>{formErr.email}</p>}

          <label>Phone number</label>
          <input type='tel' name='phoneNo' onChange={handleInputChange} />
          {formErr.phoneNo && <p className='err'>{formErr.phoneNo}</p>}

          <input className='button' type='submit' value={'Register'} />
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
