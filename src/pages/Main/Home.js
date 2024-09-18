import React from 'react';
import Button from '../../components/Button';
import { Progress } from 'antd';
import AMLHistory from '../../components/AMLHistory';

const twoColors = {
    '0%': '#108ee9',
    '100%': '#87d068',
};

const Home = () => (
    <div className="p-6 bg-white">
        {/* <PaymentDlg className='fixed w-full h-full bg-primary-blur top-0 left-0 z-10'/> */}
        <div className='grid w-full mx-auto gap-8 lg:gap-8 xl:gap-0 lg:grid-cols-12'>
            <div className='lg:col-span-4 p-4 flex flex-col items-start justify-center border-1 border-secondary-light rounded-md mr-12'>
                <span className='text-2xl font-semibold'>Wallet Balance</span>
                <span className='text-5xl font-semibold pt-6'>$120,879.03</span>
                <div className='w-full border-b-1 border-dashed pt-4'></div>
                <Button className='bg-primary p-2 text-white mt-4 w-full border-1 border-white border-dashed rounded-md' label='Deposit' targetPath="/deposit" />
            </div>
            <div className='lg:col-span-4 p-4 flex flex-col items-start justify-center border-1 border-secondary-light rounded-md mr-12'>
                <span className='text-2xl font-semibold'>Total AML Checks</span>
                <div className='w-full flex items-end'>
                    <span className='text-5xl font-semibold pt-6'>125,000,000</span>
                    <span className='flex ml-2 h-8 px-4 bg-back rounded-full items-center'>
                        <img src='/assets/images/Frame 6.svg' alt='icon' />
                        0.3$ per check
                    </span>
                </div>
                <div className='w-full border-b-1 border-dashed pt-4'></div>
                <div className='w-full mt-8'>
                    <span className='bg-back text-primary py-2 px-4 rounded-full'>02/10/2024.11:30 PM</span>
                    <span className='text-secondary pl-4'>Last time check</span>
                </div>
            </div>
            <div className='lg:col-span-4 p-4 flex flex-col items-start justify-center border-1 border-secondary-light rounded-md bg-back'>
                <span className='text-xl font-semibold bg-brown text-brown-dark p-2 rounded-xl'>Start</span>
                <span className='text-black font-semibold text-lg'>End-to end wallet verification platform for asset security</span>
                <span className='text-secondary text-base'>Providing seamless and comprehensive security for every crypto address.</span>
                <div className='flex justify-center items-center pt-2'>
                    <img className='mr-2' src='/assets/images/spot.svg' alt='icon' />
                    <span className='text-secondary mr-2'>AML Risk Check</span>
                    <img className='mr-2' src='/assets/images/spot.svg' alt='icon' />
                    <span className='text-secondary mr-2'>API Documentation</span>
                    <img className='mr-2' src='/assets/images/spot.svg' alt='icon' />
                    <span className='text-secondary '>Real time result</span>
                </div>
                <Button className='bg-primary p-2 text-white mt-4 w-full border-1 border-white border-dashed rounded-full' label='Check' />
            </div>
            <div className='lg:col-span-12 p-4 flex flex-col items-start justify-center border-1 border-secondary-light rounded-md bg-white mt-8'>
                <span className='text-2xl font-medium'>Enter Address/ Transaction hash</span>
                <div className='mt-4'>
                    <Button className='bg-primary border-1 border-dashed border-white px-4 py-3 text-lg text-white rounded-md' label="Check AddressRisk" />
                    <Button className='bg-white border-1 border-secondary-light px-4 py-3 text-lg text-secondary rounded-md ml-8' label="Check Incoming Transaction Risk " />
                </div>
                <div className='w-full flex justify-between border-1 border-secondary-light text-secondary p-2 rounded-md mt-4'>
                    <input className='text-secondary p-2 hover:border-0 w-full' placeholder='Input crypto address you would like to check' />
                    <div className='flex'>
                        <Button className='border-1 border-secondary-light rounded-md px-4 py-2' icon='/assets/images/Bitcoin (BTC).svg' iconClass='w-12' iconPosition='left' />
                        <div className='border-l-1 border-secondary-light mr-2 ml-2'></div>
                        <Button className='bg-primary px-6 py-3 text-lg text-white rounded-r-lg text-sm font-semibold' label="Check" />
                    </div>
                </div>
                <div className='w-full flex justify-between p-2'>
                    <span className='w-80'>Fetching address details</span>
                    <Progress percent={99.9} strokeColor={twoColors} />
                </div>
            </div>
            <div className='lg:col-span-12 p-4 border-1 border-secondary-light rounded-md bg-white mt-8 grid lg:grid-cols-12'>
                <span className='text-2xl col-span-12 pb-4 font-medium'>AML Check History</span>
                <AMLHistory/>
            </div>
            <div className='lg:col-span-12 p-4 border-1 border-secondary-light rounded-md bg-white mt-8 grid lg:grid-cols-12'>
                <span className='text-2xl font-medium w-full flex col-span-12 pb-4'>Screening Result</span>
                <div className='col-span-4 border-1 border-secondary-light rounded-md p-4 mr-8'>
                    <div className='flex justify-between items-center'>
                        <img className='w-96' src='/assets/images/Chart + Content.png' alt='icon' />
                        <div className='flex flex-col w-full ml-12'>
                            <div className='flex justify-between items-center border-1 border-secondary-light rounded-md py-1 px-2'>
                                <img className='w-6 pr-2' src='/assets/images/Bitcoin (BTC).svg' alt='icon' />
                                <span className='pr-2'>Address Detected</span>
                                <img src='/assets/images/icon-2.png' alt='icon' />
                            </div>
                            <div className='flex justify-between items-center border-1 border-secondary-light rounded-md py-1 px-2 mt-2'>
                                <img className='w-6 pr-2' src='/assets/images/blockchain-06.svg' alt='icon' />
                                <span className='pr-2'>35s7byknz.........</span>
                                <img src='/assets/images/copy-01.svg' alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex flex-col'>
                        <Button className='bg-brown text-brown-heavy p-2 mb-4 rounded-md border-1 border-dashed border-brown-dark font-semibold flex items-center justify-center w-36' label="Critical warning" />
                        <span className='text-secondary text-base'>This address has been flagged as high risk. Transactions from this address may be blocked by centralized exchanges. Exercise caution when interacting with it.</span>
                    </div>
                </div>
                <div className='col-span-8 border-1 border-secondary-light border-dashed rounded-md p-8'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-primary text-2xl font-medium'>Date Checked</span>
                            <span className='pt-4 text-secondary text-base'>12th July 2024 11:24:00am</span>
                            <span className='text-primary text-2xl font-medium pt-8'>Address</span>
                            <span className='pt-4 text-secondary text-base'>35s7bBwpVzsCziXQQkZQtB8oXtR5tW8Mon</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-primary text-2xl font-medium'>Coin</span>
                            <span className='pt-4 text-secondary text-base'>Bitcoin</span>
                            <span className='text-primary text-2xl font-medium pt-8'>Amount</span>
                            <span className='pt-4 text-secondary text-base'>0.3$</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-primary text-2xl font-medium'>Invoice Number</span>
                            <span className='pt-4 text-secondary text-base'>1563746483993</span>
                            <span className='text-primary text-2xl font-medium pt-8'>Status</span>
                            <span className='pt-4 text-secondary text-base'>Completed</span>
                        </div>
                    </div>
                    <center><Button className='w-3/4 border-1 bg-white border-dashed border-secondary-light p-4 rounded-full mt-8 mx-auto text-lg text-secondary-dark font-medium' label="Download receipt" /></center>
                </div>
                <span className='py-8 text-xl col-span-12'>Probable connections</span>
                <div className='col-span-12 flex flex-col p-8 border-1 border-secondary-light rounded-lg'>
                    <div className='flex justify-start items-center'>
                        <img src='/assets/images/alert-01.svg' alt='icon' />
                        <span className='text-xl font-medium pl-2'>Danger</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Dark Market (10%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} />
                            <span className='text-lg pt-6'>Sanction (6.5%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} />
                        </div>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Mixer (8.2%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} />
                            <span className='text-lg pt-6'>Enforcement Actions (8.8%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} />
                        </div>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Gambling (7.8%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} />
                            <span className='text-lg pt-6'>Enforcement Actions (8.8%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} />
                        </div>
                    </div>
                    <div className='flex justify-start items-center pt-8'>
                        <img src='/assets/images/suspend.svg' alt='icon' />
                        <span className='text-xl font-medium pl-2'>Suspicious</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Exchange /High Risk (10.9%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} strokeColor="#F7931A" />
                        </div>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>High-Risk P2P Exchange (11.8%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} strokeColor="#F7931A" />
                        </div>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>High-Risk P2P Exchange (11.8%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} strokeColor="#F7931A" />
                        </div>
                    </div>
                    <div className='flex justify-start items-center pt-8'>
                        <img src='/assets/images/check.svg' alt='icon' />
                        <span className='text-xl font-medium pl-2'>Trusted</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Exchange  (2.0%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} strokeColor="#0B8311" />
                        </div>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Wallet (0.1%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} strokeColor="#0B8311" />
                        </div>
                        <div className='flex flex-col justify-start w-1/3 pr-16 pt-8'>
                            <span className='text-lg'>Payment Management (0.1%)</span>
                            <Progress className='w-full' percent={70} status="exception" showInfo={false} strokeColor="#0B8311" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;