import React from 'react';
import BackComponent from '../../components/BackComponent';
import Button from '../../components/Button';
import { Select, Input, message, Upload } from 'antd';
const { Dragger } = Upload;
const { TextArea } = Input;

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

const options = [
    {
        value: 'jack',
        label: 'Jack',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'tom',
        label: 'Tom',
    },
];

const requestNumber = "#89876563783735-mm";

const SupportTicket = () => {

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className="p-4 sm:p-6 bg-white">
            <BackComponent title="Support Ticket" targetPath="/home" component={<Button className='border-1 border-secondary-light p-2 bg-white text-secondary-dark mr-5 rounded-md' label='View previous request' />} />
            <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12 max-w-7xl">
                <div className="lg:col-span-2"></div>
                <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 py-4 px-4 sm:px-16 rounded-md flex flex-col justify-center items-center">
                    <div className='w-2/3 pt-4 flex flex-col hover:border-0'>
                        <span className='text-base p-2 text-secondary-dark'>Select Request Type</span>
                        <Select
                            className='h-12'
                            showSearch
                            placeholder="Deposit issues"
                            optionFilterProp="label"
                            onChange={onChange}
                            onSearch={onSearch}
                            options={options}
                        />
                        <span className='text-base p-2 pt-6 text-secondary-dark'>Description</span>
                        <TextArea
                            showCount
                            maxLength={250}
                            onChange={onChange}
                            placeholder="Let us understand the issues you're having....."
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                        />
                        <span className='text-base p-2 pt-6 text-secondary-dark'>Your request number</span>
                        <div className='w-full p-3 flex justify-between border-1 border-secondary-light rounded-md'>
                            <span className='text-black'>{requestNumber}</span>
                            <img src='/assets/images/info-circle.svg' alt='icon' />
                        </div>
                        <Dragger className='mt-6 bg-primary-light3 border-1 border-primary border-dashed rounded-md' {...props}>
                            <p className="ant-upload-drag-icon">
                                <center>
                                    <img src='/assets/images/upload-icon.svg' alt='icon' />
                                </center>
                            </p>
                            <p className="text-primary text-lg font-medium">Upload featured image</p>
                            <p className="ant-upload-hint">
                                You may include images in your request to help us better understand the issue; this is optional.
                            </p>
                        </Dragger>
                        <div className='w-full flex justify-end pt-6'>
                            <Button className='text-white bg-primary px-8 py-2 border-1 border-white border-dashed rounded-lg' label='Send' />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2"></div>
            </div>
        </div>
    );
}

export default SupportTicket;