import React from 'react';
import AMLHistory from '../../components/AMLHistory';

const addr = "TYnwdKisQMHXS4ttM4RDMQc191H8TKm396";

const CheckHistory = () => (
    <div className="p-4 sm:p-6 bg-white">
        <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
            <span className='text-2xl font-medium w-full col-span-12 pb-8'>AML Check History</span>
            <AMLHistory/>
        </div>
    </div>
);

export default CheckHistory;