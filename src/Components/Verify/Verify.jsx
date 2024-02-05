import React, { useState, useEffect } from 'react';
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import OtpInput from 'otp-input-react';
import { CgSpinner } from 'react-icons/cg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Verify = () => {
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendCode = async () => {
    console.log("awa nee ")
    console.log('OTP sent successfully:');

    try {
      setLoading(true);

      // Make your API call here to send OTP
      // const response = await axios.post('/api/innobothealth/admin/sms', {
      //   phoneNumber: ph,
      // });
      const response = { status: 201 }; 

      
      if (response.status === 201) {
        
        toast.success('OTP sent successfully. Please check your phone.');
        
      } else {
        
        console.error('Error sending OTP. Status:', response.status);

        
        if (response.status === 405) {
          toast.error('Invalid request. Please try again.');
        } else {
          toast.error('An error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const toastOptions = {
    
  };



  return (
    <>
      <section className='bg-[#03989e] flex items-center justify-center min-h-screen'>
        <div>
          <Toaster toastOptions={toastOptions} />

          <div className='max-w-screen-md w-full'>
            <div className='w-full md:w-80 mx-auto flex flex-col gap-4 rounded-lg p-4'>
              <h1 className='text-center leading-normal text-white font-medium text-3xl mb-6'>
                InnoBotHealth
              </h1>

              <div className='flex flex-col items-center'>
                <div className='bg-white text-[#03989e] w-fit mx-auto p-4 rounded-full'>
                  <BsTelephoneFill size={30} />
                </div>
                <label htmlFor='phoneNumber' className='font-bold text-xl text-white text-center'>
                  Verify your phone number
                </label>
                <PhoneInput country={'in'} value={ph} onChange={setPh} /> 

                <Link to={"/otp"}>
                  <button>hhhhhh</button>
                  
                </Link>
                <button
                  onClick={handleSendCode}
                  className='bg-[#03989e]-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded'
                  disabled={loading}
                >
                  {loading ? <CgSpinner className='animate-spin' size={20} /> : <span>Send code via SMS</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
