import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(''); // State for email error
    const [passwordError, setPasswordError] = useState(''); // State for password error

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, token } = useSelector(state => state.auth);

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    const validateEmail = (email) => {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        // Validate email format
        if (inputEmail && !validateEmail(inputEmail)) {
            setEmailError('Enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);

        // Validate password length
        if (inputPassword.length > 0 && inputPassword.length < 6) {
            setPasswordError('Password must be longer than 6 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = () => {
        // Check for errors before dispatching login
        const isEmailValid = validateEmail(email);
        const isPasswordValid = password.length >= 6;

        if (!isEmailValid) {
            setEmailError('Enter a valid email address');
        }
        if (!isPasswordValid) {
            setPasswordError('Password must be longer than 6 characters');
        }

        if (isEmailValid && isPasswordValid) {
            dispatch(login(email, password));
        }
    };

    return (
        <div className='grid w-full h-full max-w-screen-xl px-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 bg-white'>
            <div className='lg:col-span-5 items-center flex flex-col justify-center border-1 border-secondary-light h-full rounded-2xl shadow-custom-light1 shadow-custom-light-2'>
                <img className='pb-12' src='/assets/images/logo.png' alt='logo' />
                <span className='text-5xl font-semibold pb-4'>Login</span>
                <div className='flex pb-8'>
                    <span className='text-secondary'>Need to register? </span>
                    <span className='text-primary underline pl-2 cursor-pointer'>
                        <Link to='/signup'>Sign Up</Link>
                    </span>
                </div>
                <div className='flex flex-col items-start w-full px-12'>
                    <span className='text-sm'>Email</span>
                    <Input
                        className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && <div className='text-red-500 mt-2'>{emailError}</div>}
                    <span className='pt-8 text-sm'>Enter password</span>
                    <Input
                        className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full'
                        placeholder='Input password'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <div className='text-red-500 mt-2'>{passwordError}</div>}
                    <Button
                        className='bg-primary w-full text-white py-2 mt-12 rounded-full border-1 border-white border-dashed flex justify-center'
                        label='Login'
                        icon='/assets/images/login.svg'
                        iconPosition='left'
                        iconPadding="0 8px 0 0"
                        onClick={handleLogin}
                        disabled={loading}
                    />
                    {error && <div className='text-red-500 mt-4'>{error}</div>}
                </div>
                <div className='flex flex-col justify-center items-center text-secondary text-sm pt-8'>
                    <span>Effective risk management and compliance are the cornerstones of</span>
                    <span>trust in today's financial landscape. Navigating the complexities of</span>
                    <span>AML requires more than just meeting standards—it's about</span>
                    <span>safeguarding your asset and ensuring long-term success.</span>
                </div>
            </div>
            <div className='lg:col-span-7 flex flex-col justify-center items-start pl-12'>
                <span className='font-semibold text-3xl pb-8'>Expand globally with the market's highest <br />pass rates.</span>
                <img className='pb-8' src='/assets/images/image 6.png' alt='back' />
                <span className='text-secondary text-xl pb-8'>"With AMLGRID, verification speed surged over five times, leading to <br />
                    smoother operations and enhanced efficiency. At the same time, our <br />
                    overall risk exposure significantly decreased, providing a stronger <br />
                    foundation for sustainable growth."
                </span>
                <div className='flex'>
                    <img src='/assets/images/image 8.png' alt='icon' />
                    <div className='flex flex-col justify-center items-start pl-8'>
                        <span className='font-semibold text-xl'>Tony Baptiste</span>
                        <span>Business-oriented personnel</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;