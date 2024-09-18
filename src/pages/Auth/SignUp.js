import React from 'react';
import Button from '../../components/Button';

const SignUp = () => (
    <div className='grid w-full h-full max-w-screen-xl px-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 bg-white'>
        <div className='lg:col-span-5 items-center flex flex-col justify-center border-1 border-secondary-light h-full rounded-2xl shadow-custom-light1 shadow-custom-light-2'>
            <img className='pb-12' src='/assets/images/logo.png' alt='logo' />
            <span className='text-5xl font-semibold pb-4'>Get Started</span>
            <div className='flex flex-col items-start w-full px-12'>
                <span className='text-sm'>Email</span>
                <input className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full' placeholder='Enter your email address' />
                <span className='pt-8 text-sm'>Create password</span>
                <input className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full' placeholder='Create password' type='password'/>
                <span className='pt-8 text-sm'>Confirm password</span>
                <input className='px-4 py-3 text-base mt-2 text-secondary border-1 border-secondary-light rounded-xl w-full' placeholder='Confirm password' type='password'/>
                <Button className='bg-primary w-full text-white py-2 mt-12 rounded-full border-1 border-white border-dashed flex justify-center' label='Submit' icon='/assets/images/login.svg' iconPosition='left' iconPadding="0 8px 0 0" />
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
            <span className='text-secondary text-xl pb-8'>“After i signed with AMLGRID and integrated their tool, I managed to <br />increase the speed of verification by more than 5 times. Currently, my <br />asset loss to scams drastically decreased in ten folds.”
            </span>
            <div className='flex'>
                <img src='/assets/images/image 10.png' alt='icon' />
                <div className='flex flex-col justify-center items-start pl-8'>
                    <span className='font-semibold text-xl'>Makinde Samson</span>
                    <span>Business -focused Personnel</span>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp;