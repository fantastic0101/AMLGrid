import React from 'react';
import BackComponent from '../../components/BackComponent';
import CustomSelect from '../../components/CustomSelect';
import QRCodeComponent from '../../components/QRComponent';
import Button from '../../components/Button';

const selectOptions = [
    {
        value: "USDT",
        label1: "USDT",
        label2: "TRC20",
        image: "/assets/images/Tron.svg"
    },
    {
        value: "Payeer",
        label1: "Payeer",
        label2: "",
        image: "/assets/images/payeer.svg"
    },
    {
        value: "PM",
        label1: "Perfect Money",
        label2: "",
        image: "/assets/images/PM.svg"
    },
];

const addr = "TYnwdKisQMHXS4ttM4RDMQc191H8TKm396";

const DepositDetail = () => (
    <div className="p-4 sm:p-6 bg-white">
        <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
            <BackComponent title="Deposit USDT" targetPath="/deposit" />
            <div className="lg:col-span-2"></div>
            <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 p-4 sm:p-8 rounded-md flex justify-center items-center">
                <div className="flex flex-col w-full sm:w-1/2">
                    <span className="text-base sm:text-lg py-2 sm:py-4">Network</span>
                    <CustomSelect className="w-full h-12" options={selectOptions} defaultValue={selectOptions[0].value} />
                    <span className="text-base sm:text-lg py-2 sm:py-4">Address</span>
                    <div className="flex justify-between border border-secondary-light rounded-md p-2 sm:p-3">
                        <span className="text-sm sm:text-base">{addr}</span>
                        <img className="w-4" src="/assets/images/copy-01.svg" alt="icon" />
                    </div>
                    <center className="pt-2 sm:pt-4 text-sm sm:text-base font-medium">
                        <span>Scan QR code</span>
                    </center>
                    <QRCodeComponent value={addr} logo="/assets/images/Tron.svg" />
                    <div className="border border-primary rounded-md py-2 px-4 sm:py-2 sm:px-8 flex flex-col justify-start bg-primary-light3 mt-4">
                        <span className="text-sm sm:text-base font-bold text-secondary-dark">Note:</span>
                        <div className="text-xs sm:text-sm">
                            <span>You were to deposit at least </span>
                            <span className="text-primary font-bold">0.0005 USDT </span>
                            <span>to be funded, otherwise your wallet will not be funded</span>
                        </div>
                    </div>
                    <Button className="bg-primary text-white border border-dashed border-white px-4 py-2 sm:py-3 rounded-full text-base sm:text-lg mt-4 sm:mt-8" label="View History" targetPath='/deposit_history' />
                </div>
            </div>
            <div className="lg:col-span-2"></div>
        </div>
    </div>
);

export default DepositDetail;