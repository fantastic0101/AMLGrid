import React from 'react';
import BackComponent from '../../components/BackComponent';

const data = [
    {
        type: "Perfect Money",
        image: "/assets/images/PM.svg",
        amount: 0.0006537,
        unit: "PM",
        date: "15/08/2024",
        status: "Completed"
    },
    {
        type: "Perfect Money",
        image: "/assets/images/PM.svg",
        amount: 0.0006537,
        unit: "PM",
        date: "15/08/2024",
        status: "Completed"
    },
    {
        type: "Perfect Money",
        image: "/assets/images/PM.svg",
        amount: 0.0006537,
        unit: "PM",
        date: "15/08/2024",
        status: "Completed"
    },
]

const DepositHistory = () => (
    <div className="p-4 sm:p-6 bg-white">
        <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
            <BackComponent title="Deposit History" targetPath="/deposit_detail" />
            <div className='w-full mt-24 col-span-12 grid lg:grid-cols-12 rounded-xl border-1 border-secondary-light'>
                <div className='col-span-3 p-4 bg-primary-light2 text-secondary-dark text-lg rounded-tl-xl'>
                    Type
                </div>
                <div className='col-span-3 p-4 bg-primary-light2 text-secondary-dark text-lg'>
                    Amount
                </div>
                <div className='col-span-3 p-4 bg-primary-light2 text-secondary-dark text-lg'>
                    Date
                </div>
                <div className='col-span-3 p-4 bg-primary-light2 text-secondary-dark text-lg rounded-tr-xl'>
                    Status
                </div>
                {
                    data.map((item, index) => {
                        return (<>
                            <div className='col-span-3 flex items-center p-4 text-secondary-dark text-base'>
                                <img src={item.image} alt='icon' />
                                <span className='pl-2'>{item.type}</span>
                            </div>
                            <div className='col-span-3 flex items-center p-4 text-secondary-dark text-base'>
                                <span>{item.amount + item.unit}</span>
                            </div>
                            <div className='col-span-3 flex items-center p-4 text-secondary-dark text-base'>
                                <span>{item.date}</span>
                            </div>
                            <div className='col-span-3 flex items-center p-4 text-secondary-dark text-base font-medium'>
                                <span className='text-primary'>{item.status}</span>
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    </div>
);

export default DepositHistory;