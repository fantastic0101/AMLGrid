import React, { useState } from 'react';
import BackComponent from '../../components/BackComponent';
import QRCodeComponent from '../../components/QRComponent';
import Button from '../../components/Button';
import AuthCode from 'react-auth-code-input';

const addr = "TYnwdKisQMHXS4ttM4RDMQc191H8TKm396";

const Authentication = () => {
    const [result, setResult] = useState();
    const handleOnChange = (res) => {
        setResult(res);
    };

    return (
        <div className="p-4 sm:p-6 bg-white">
            <BackComponent title="2FA Authentication" targetPath="/deposit" />
            <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12 max-w-7xl">
                <div className="lg:col-span-2"></div>
                <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 py-4 px-4 sm:px-16 rounded-md flex flex-col justify-center items-center">
                    <QRCodeComponent value={addr} />
                    <div className="flex flex-col sm:flex-row mt-4 sm:mt-8">
                        <div className="flex justify-start items-start mb-4 sm:mb-0">
                            <span className="p-4 bg-primary-light2 text-primary text-xl rounded-full w-12 h-12 flex justify-center items-center">1</span>
                        </div>
                        <div className="sm:pl-4 text-center sm:text-left">
                            <span className="text-base sm:text-lg block">
                                Scan the QR code using any authentication application on your phone (e.g.,
                                <span className="text-primary"> Google Authenticator, Duo Mobile, Authy</span>
                                ) or enter the following code on your mobile phone.
                            </span>
                            <div className='pt-8 flex'>
                                <span className='text-xl font-medium'>{addr}</span>
                                <img className='w-6 pl-2' src='/assets/images/copy-01.svg' alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:flex-row mt-4 sm:mt-8">
                        <div className="flex justify-start items-start mb-4 sm:mb-0">
                            <span className="p-4 bg-primary-light2 text-primary text-xl rounded-full w-12 h-12 flex justify-center items-center">2</span>
                        </div>
                        <div className="sm:pl-4 text-center flex items-center sm:text-left">
                            <span className="text-base sm:text-lg block">
                                Enter the 6 figure confirmation code shown on the mobile app
                            </span>
                        </div>

                    </div>
                    <div className="border border-primary rounded-md py-2 px-4 sm:py-2 sm:px-8 flex flex-col justify-start bg-primary-light3 mt-4 w-full">
                        <span className="text-sm sm:text-base font-bold text-black">Note:</span>
                        <div className="text-xs sm:text-sm">
                            <span>You will be logged out from all all your browsers that have been used to log in to your account recently for security reasons. However you can log in after activation</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center pt-6'>
                        <AuthCode className='flex' inputClassName='w-10 ml-6 text-xl border-1 border-secondary-light rounded-md' allowedCharacters='numeric' onChange={handleOnChange} />
                    </div>
                    <div className='w-full flex justify-end pt-4'>
                        <Button className='text-black py-2 px-8 bg-white text-base border-1 border-secondary-light rounded-md' label='Cancel' />
                        <Button className='text-white py-2 px-8 ml-4 bg-primary text-base border-1 border-secondary-light rounded-md' label='Activate' />
                    </div>
                </div>
                <div className="lg:col-span-2"></div>
            </div>
        </div>
    );
}

export default Authentication;