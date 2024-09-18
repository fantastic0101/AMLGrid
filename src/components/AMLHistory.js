import React from 'react';
import Button from './Button';
import { DatePicker, Input, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const addr = "TYnwdKisQMHXS4ttM4RDMQc191H8TKm396";

const AMLHistory = () => {
    return (
        <div className='w-full col-span-12 flex flex-col'>
                <div className='flex'>
                    <Button className='bg-white border-1 border-secondary-light p-2 rounded-lg text-secondary-dark font-medium flex items-center' icon='/assets/images/Filters lines.svg' iconPosition='left' iconClass='pr-2' label='Filters' />
                    <DatePicker className='bg-white border-1 border-secondary-light p-2 rounded-lg text-secondary-dark font-medium flex items-center w-48 ml-4' placeholder='Select Date' />
                    <Input className='bg-white border-1 border-secondary-light p-2 rounded-lg text-secondary-dark font-medium flex items-center w-48 ml-4' size="large" placeholder="Search for links" prefix={<SearchOutlined />} />
                </div><br />
                <table className='w-full'>
                    <thead className='bg-secondary-light3 border-1 border-secondary-light'>
                        <tr className='text-secondary-dark font-light'>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Address/ Tx hash</th>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Direction/ Value</th>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Risky Transfer amount</th>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Counterparty Risk Score</th>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Blocklist</th>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Mode</th>
                            <th className='font-light p-2' style={{ textAlign: "left" }}>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-1 border-secondary-light text-secondary'>
                            <td className='flex justify-start p-4'>
                                <Checkbox className='pr-2' checked></Checkbox>
                                <img src='/assets/images/Bitcoin (BTC).svg' alt='icon' />
                                <div className='flex flex-col pl-2'>
                                    <span className='text-base font-medium'>Bitcoin</span>
                                    <span>{addr}</span>
                                </div>
                            </td>
                            <td>
                                N/A
                            </td>
                            <td>
                                N/A
                            </td>
                            <td>
                                <div className='flex flex-col'>
                                    <span className='text-base font-medium text-red-600'>92.23%</span>
                                    <span>12/09/2024. 11:01am</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex flex-col'>
                                    <span className='pb-2'>N/A</span>
                                    <span className='flex justify-center w-fit px-4 rounded-full bg-primary-light3 text-primary'>Not Applicable</span>
                                </div>
                            </td>
                            <td>
                                <span>Fast</span>
                            </td>
                            <td>
                            <span className='flex justify-center w-fit px-4 rounded-full bg-red-100 text-red-700'>Not Applicable</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
};

export default AMLHistory;