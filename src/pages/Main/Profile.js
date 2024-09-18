import React from 'react';
import BackComponent from '../../components/BackComponent';
import Button from '../../components/Button';

const userInfo = {
    name: 'Akinola Emmanuel',
    email: 'Akinolanuel74@gmail.com'
}

const Profile = () => (
    <div className="p-4 sm:p-6 bg-white">
        <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
            <BackComponent title="Profile" targetPath="/home" />
            <div className="lg:col-span-2"></div>
            <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 p-4 sm:p-8 rounded-md flex flex-col justify-center items-center">
                <div className='w-full flex justify-between'>
                    <span className='text-xl font-medium'>My Profile</span>
                    <Button className='p-2 border-1 border-secondary-light rounded-md' icon='/assets/images/pencil.svg' iconPosition='left'/>
                </div>
                <div className='w-full py-2'>
                    <span className='text-lg text-secondary-dark'>Name:</span>
                    <span className='text-xl text-black pl-8'>{userInfo.name}</span>
                </div>
                <div className='w-full py-2'>
                    <span className='text-lg text-secondary-dark'>Email:</span>
                    <span className='text-xl text-black pl-8'>{userInfo.email}</span>
                </div>
            </div>
            <div className="lg:col-span-2"></div>
        </div>
    </div>
);

export default Profile;