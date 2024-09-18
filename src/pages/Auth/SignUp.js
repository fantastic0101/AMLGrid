import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions/authAction';
import Button from '../../components/Button';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate
    const { loading, error, user } = useSelector(state => state.register);

    useEffect(() => {
        if (user) {
            navigate('/signin'); // Navigate to /signin on successful registration
        }
    }, [user, navigate]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        let valid = true;

        if (!name.trim()) {
            setNameError('Name is required.');
            valid = false;
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (!valid) return;

        dispatch(register(name, email, password));
    };

    return (
        <div className='grid w-full h-full max-w-screen-xl px-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 bg-white'>
            <div className='lg:col-span-5 items-center flex flex-col justify-center border-1 border-secondary-light h-full rounded-2xl shadow-custom-light1 shadow-custom-light-2'>
                <Link to='/'>
                    <img className='pb-12' src='/assets/images/logo.png' alt='logo' />
                </Link>
                <span className='text-5xl font-semibold pb-4'>Get Started</span>
                <div className='flex flex-col items-start w-full px-12'>
                    <span className='text-sm'>Name</span>
                    <Input
                        className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <div className='text-red-500 mt-2'>{nameError}</div>}

                    <span className='pt-8 text-sm'>Email</span>
                    <Input
                        className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className='text-red-500 mt-2'>{emailError}</div>}

                    <span className='pt-8 text-sm'>Create password</span>
                    <Input.Password
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full'
                        placeholder='Create password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div className='text-red-500 mt-2'>{passwordError}</div>}

                    <span className='pt-8 text-sm'>Confirm password</span>
                    <Input.Password
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                        className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordError && <div className='text-red-500 mt-2'>{confirmPasswordError}</div>}

                    <Button
                        className='bg-primary w-full text-white py-2 mt-12 rounded-full border-1 border-white border-dashed flex justify-center'
                        label={loading ? 'Submitting...' : 'Submit'}
                        icon='/assets/images/login.svg'
                        iconPosition='left'
                        iconPadding="0 8px 0 0"
                        onClick={handleSubmit}
                        disabled={loading}
                    />
                    {error && <div className='text-red-500 mt-4'>{error}</div>}
                </div>
                <div className='flex flex-col justify-center items-center text-secondary text-sm pt-8'>
                    <span>By submitting this form, you consent to the processing of your </span>
                    <span>personal data to deliver our product, including contact via email and </span>
                    <span>for the purposes outlined above, in accordance with the</span>
                    <span className='text-primary underline cursor-pointer'>Privacy Notice.</span>
                </div>
            </div>
            <div className='lg:col-span-7 flex flex-col justify-center items-start pl-12'>
                <span className='font-semibold text-3xl pb-8'>Expand globally with the market's highest <br />pass rates.</span>
                <img className='pb-8' src='/assets/images/image 9.png' alt='back' />
                <span className='text-secondary text-xl pb-8'>“After I signed with AMLGRID and integrated their tool, I managed to <br />increase the speed of verification by more than 5 times. Currently, my <br />asset loss to scams drastically decreased in ten folds.”
                </span>
                <div className='flex'>
                    <img src='/assets/images/image 10.png' alt='icon' />
                    <div className='flex flex-col justify-center items-start pl-8'>
                        <span className='font-semibold text-xl'>Makinde Samson</span>
                        <span>Business-focused Personnel</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;