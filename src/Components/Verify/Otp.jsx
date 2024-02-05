
import React, { useState, useEffect } from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';
import OtpInput from 'otp-input-react';
import { CgSpinner } from 'react-icons/cg';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [ph, setPh] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const navigate = useNavigate();

    const toastOptions = { duration: 4000 };

    const onSignup = () => {
        setLoading(true);

        const formattedPh = '+' + ph;

        axios
            .post('https://projects.dulanga.com/api/innobothealth/user/register', {
                phoneNumber: formattedPh,
            })
            .then((response) => {
                if (response.data.success) {
                    setLoading(false);
                    setShowOTP(true);
                    toast.success('Phone number verified successfully!', toastOptions);
                } else {
                    setLoading(false);
                    toast.error('Failed to verify phone number. Please try again.', toastOptions);
                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
                toast.error('Failed to verify phone number. Please try again.', toastOptions);
            });
    };

    const onOTPVerify = () => {
        setLoading(true);

        // For demonstration purposes, replace this with the actual valid JWT token
        const jwtToken = 'actual_valid_jwt_token_here';

        try {
            const decodedToken = jwt_decode(jwtToken);

            setLoading(false);
            toast.success('OTP verified successfully!', toastOptions);

            if (decodedToken && decodedToken.role === 'admin') {
                sessionStorage.setItem('jwtToken', jwtToken);
                navigate('/admin-dashboard');
            } else {
                console.log('User is not an admin or token is undefined');
            }
        } catch (error) {
            console.error('Error decoding JWT token:', error);
            setLoading(false);
            toast.error('Failed to verify OTP. Please try again.', toastOptions);
        }

    };

    return (
        <>
            <section className='bg-[#03989e] flex items-center justify-center min-h-screen'>
                <div>
                    <Toaster toastOptions={toastOptions} />
                    <div id='recaptcha-container'></div>

                    <div className='max-w-screen-md w-full'>
                        <div className='w-full md:w-80 mx-auto flex flex-col gap-4 rounded-lg p-4'>
                            <h1 className='text-center leading-normal text-white font-medium text-3xl mb-6'>
                                InnoBotHealth
                            </h1>


                            <div className='hidden md:flex flex-col items-center'>
                                <div className='bg-white text-[#03989e] w-fit mx-auto p-4 rounded-full'>
                                    <BsFillShieldLockFill size={30} />
                                </div>
                                <label htmlFor='otp' className='font-bold text-xl text-white text-center'>
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType='number'
                                    disabled={false}
                                    autoFocus
                                    className='otp-container'
                                />
                                <button
                                    onClick={onOTPVerify}
                                    className='bg-[#03989e]-400 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded'
                                >
                                    {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
                                    <span>Verify OTP</span>
                                </button>
                            </div>

                            {/* <div className='flex flex-col items-center'>
                    <div className='bg-white text-[#03989e] w-fit mx-auto p-4 rounded-full'>
                      <BsTelephoneFill size={30} />
                    </div>
                    <label htmlFor='phoneNumber' className='font-bold text-xl text-white text-center'>
                      Verify your phone number
                    </label>
                    <PhoneInput country={'in'} value={ph} onChange={setPh} />
                    <button
                      onClick={onSignup}
                      className='bg-[#03989e]-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded'
                    >
                      {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
                      <span>Send code via SMS</span>
                    </button>
                  </div> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Otp