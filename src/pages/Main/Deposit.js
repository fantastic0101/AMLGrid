import React from 'react';
import BackComponent from '../../components/BackComponent';
import Button from '../../components/Button';

const Deposit = () => (
    <div className="p-6 bg-white">
        <div className='grid w-full mx-auto gap-8 lg:gap-8 xl:gap-0 lg:grid-cols-12'>
            <BackComponent title='Deposit' targetPath='/home' />
            <div className='col-span-12 mt-12 flex justify-start items-center bg-primary-light3 border-1 border-primary p-4 text-secondary-dark rounded-md'>
                <span>Please select your proffered crypto for deposit from the options below</span>
            </div>
            <div className='col-span-12 mt-6 grid lg:grid-cols-12'>
                <span className='text-2xl font-bold col-span-12 pb-8'>Coin</span>
                <span className='col-span-4 text-lg text-secondary-light-dark'>Type</span>
                <span className='col-span-6 text-lg text-secondary-light-dark'>Amount</span>
                <span className='col-span-2 text-lg text-secondary-light-dark'>Action</span>
                <div className='py-6 border-1 border-secondary-light col-span-12 grid lg:grid-cols-12 mt-8 rounded-xl'>
                    <div className='col-span-4 pl-4 flex'>
                        <img src='/assets/images/Tron.svg' alt='icon'/>
                        <div className='flex flex-col pl-4'>
                            <span className='font-medium text-lg'>USDTTRC</span>
                            <span>Tether USDT</span>
                        </div>
                    </div>
                    <div className='col-span-6 flex items-center'>
                        <span className='text-lg font-medium'>0.000567833736</span>
                    </div>
                    <div className='col-span-2'>
                        <Button className='py-2 px-8 text-primary border-1 border-secondary-light rounded-lg text-xl' label='Deposit' targetPath='/deposit_detail'/>
                    </div>
                    <div className='col-span-4 pl-4 flex pt-16'>
                        <img src='/assets/images/payeer.svg' alt='icon'/>
                        <div className='flex flex-col pl-4'>
                            <span className='font-medium text-lg'>Payeer</span>
                            <span>Payeer</span>
                        </div>
                    </div>
                    <div className='col-span-6 flex items-center pt-16'>
                        <span className='text-lg font-medium'>0.000567833736</span>
                    </div>
                    <div className='col-span-2 pt-16'>
                        <Button className='py-2 px-8 text-primary border-1 border-secondary-light rounded-lg text-xl' label='Deposit' targetPath='/deposit_detail'/>
                    </div>
                    <div className='col-span-4 pl-4 flex pt-16'>
                        <img src='/assets/images/PM.svg' alt='icon'/>
                        <div className='flex flex-col pl-4'>
                            <span className='font-medium text-lg'>PM</span>
                            <span>Perfect Money</span>
                        </div>
                    </div>
                    <div className='col-span-6 flex items-center pt-16'>
                        <span className='text-lg font-medium'>0.000567833736</span>
                    </div>
                    <div className='col-span-2 pt-16'>
                        <Button className='py-2 px-8 text-primary border-1 border-secondary-light rounded-lg text-xl' label='Deposit' targetPath='/deposit_detail'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Deposit;