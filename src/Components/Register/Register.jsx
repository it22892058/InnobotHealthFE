import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Make sure to have Tailwind CSS properly configured
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formFields, setFormFields] = useState({
    Fname: '',
    Lname: '',
    email: '',
    Password: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+[0-9]+$/;

  const validateForm = () => {
    const errors = {};

    if (!formFields.Fname.trim()) {
      
    }

    if (!formFields.Lname.trim()) {
      
    }

    if (!formFields.email.trim() || !emailRegex.test(formFields.email)) {
     
    }

    if (!formFields.Password.trim() || !passwordRegex.test(formFields.Password)) {
      
    }

    if (!formFields.phone.trim() || !phoneRegex.test(formFields.phone)) {
      
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Display an error toast for overall form validation failure
      toast.error('Form validation failed');
      return;
    }

    try {
      const response = await axios.post('/api/innobothealth/admin/register', formFields);

      console.log('Registration successful:', response.data);
      // Display a success toast for successful registration
      toast.success('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Display an error toast for registration failure
      toast.error('Registration failed. Please try again.');

      // If the error response contains field-specific errors, display them
      if (error.response && error.response.data && error.response.data.errors) {
        const fieldErrors = error.response.data.errors;
        setFormErrors(fieldErrors);
      }
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
  };

  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video autoPlay muted src={video}></video>
          <div className='textDiv'></div>
          <div className='footerDiv flex'>
            <span className='text'>Have an account?</span>
            <Link to={'/'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='logo' className='mx-auto' />
            <h3>Let Us Know You</h3>
          </div>

          <form onSubmit={handleRegistration} className='form grid'>
            <div className='inputDiv'>
              <div className='input flex'>
                <FaUserShield className='icon'></FaUserShield>
                <input
                  type='text'
                  id='Fname'
                  placeholder='Enter your First Name'
                  value={formFields.Fname}
                  onChange={handleInputChange}
                />
                {formErrors.Fname && <span className='error'>{formErrors.Fname}</span>}
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <FaUserShield className='icon'></FaUserShield>
                <input
                  type='text'
                  id='Lname'
                  placeholder='Enter your Last Name'
                  value={formFields.Lname}
                  onChange={handleInputChange}
                />
                {formErrors.Lname && <span className='error'>{formErrors.Lname}</span>}
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <MdEmail className='icon'></MdEmail>
                <input
                  type='text'
                  id='email'
                  placeholder='Enter your Email'
                  value={formFields.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <span className='error'>{formErrors.email}</span>}
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input
                  type='password'
                  id='Password'
                  placeholder='Enter Password'
                  value={formFields.Password}
                  onChange={handleInputChange}
                />
                {formErrors.Password && <span className='error'>{formErrors.Password}</span>}
              </div>
            </div>
            <div className='inputDiv'>
              <div className='input flex'>
                <FaPhone className='icon' />
                <input
                  type='text'
                  id='phone'
                  placeholder='Enter Mobile phone'
                  value={formFields.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && <span className='error'>{formErrors.phone}</span>}
              </div>
            </div>

            {/* Updated error display */}
            <div className='errorDiv'>
              {Object.keys(formErrors).map((key) => (
                <span key={key} className='error'>
                  {formErrors[key]}
                </span>
              ))}
            </div>

            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight className='icon' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
