import React from 'react';
import { Link } from 'react-router-dom';

const BackComponent = ({ title, targetPath, component }) => {
    return (
        <div className='col-span-12 bg-white border-b-1 border-secondary-light flex items-center w-full pl-8 -m-6 py-6 flex justify-between' style={{ width: "calc(100% + 3rem)" }}>
            <div className='flex items-center'>
                <Link to={targetPath}>
                    <img src='/assets/images/arrow-left-02.svg' alt='icon' />
                </Link>
                <span className='pl-2 text-lg font-medium'>{title}</span>
            </div>
            {component}
        </div>
    )
};

export default BackComponent;