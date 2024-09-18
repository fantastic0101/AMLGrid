import React from 'react';
import BackComponent from '../../components/BackComponent';
import Button from '../../components/Button';

const Security = () => (
    <div className="p-4 sm:p-6 bg-white">
        <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
            <BackComponent title="Profile" targetPath="/home" />
            <div className="lg:col-span-2"></div>
            <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 p-4 sm:p-8 rounded-md flex flex-col justify-center items-center">
                <div className='w-full flex justify-between px-4 py-6 border-b-1'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-medium'>API Keys</span>
                        <span className='text-secondary-dark'>Set up your access key. API key is disabled</span>
                    </div>
                    <Button className='py-1 px-12 bg-primary-light3 text-primary text-base font-medium rounded-md' label='Set Key' />
                </div>
                <div className='w-full flex justify-between px-4 py-6 border-b-1'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-medium'>Two- factor authentication</span>
                        <span className='text-secondary-dark'>Set up 2FA to improve the security of your account</span>
                    </div>
                    <Button className='py-1 px-12 bg-primary-light3 text-primary text-base font-medium rounded-md' label='Activate' />
                </div>
                <div className='w-full flex justify-between px-4 py-6'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-medium'>Change Password</span>
                        <span className='text-secondary-dark'>**********</span>
                    </div>
                    <Button className='py-1 px-12 bg-primary-light3 text-primary text-base font-medium rounded-md' label='Change' />
                </div>
            </div>
            <div className="lg:col-span-2"></div>
        </div>
    </div>
);

export default Security;