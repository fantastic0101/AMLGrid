import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import BackComponent from '../../components/BackComponent';
import Button from '../../components/Button';
import { Modal, Input, Form, message } from 'antd';
import { serverUrl } from '../../utils/url';

const Security = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const token = localStorage.getItem('token'); // Retrieve token from local storage

            // Send request to change password
            axios.post(`${serverUrl}/change_password`, {
                currentPassword: values.currentPassword,
                newPassword: values.newPassword
            }, {
                headers: {
                    'Authorization': `Bearer ${token}` // Attach token for authentication
                }
            })
                .then(response => {
                    message.success(response.data.message);
                    setIsModalOpen(false);
                    form.resetFields();
                })
                .catch(error => {
                    message.error(error.response?.data?.message || 'Error changing password');
                });

        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    return (
        <div className="p-4 sm:p-6 bg-white">
            <Modal
                title="Change Password"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="change" className='bg-primary-light2 text-primary py-2 px-4 mr-4 rounded-lg' label='Change' onClick={handleOk} />,
                    <Button key="cancel" className='bg-white border-1 border-secondary py-2 px-4 rounded-lg' label='Cancel' onClick={handleCancel} />,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="currentPassword"
                        label="Current Password"
                        rules={[{ required: true, message: 'Please enter your current password' }]}
                    >
                        <Input.Password placeholder="Current Password" />
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        label="New Password"
                        rules={[
                            { required: true, message: 'Please enter a new password' },
                            { min: 6, message: 'Password must be at least 6 characters' },
                        ]}
                    >
                        <Input.Password placeholder="New Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm New Password"
                        dependencies={['newPassword']}
                        rules={[
                            { required: true, message: 'Please confirm your new password' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm New Password" />
                    </Form.Item>
                </Form>
            </Modal>
            <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
                <BackComponent title="Profile" targetPath="/home" />
                <div className="lg:col-span-2"></div>
                <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 p-4 sm:p-8 rounded-md flex flex-col justify-center items-center">
                    <div className='w-full flex justify-between px-4 py-6 border-b-1'>
                        <div className='flex flex-col'>
                            <span className='text-lg font-medium'>API Keys</span>
                            <span className='text-secondary-dark'>Set up your access key. API key is disabled</span>
                        </div>
                        <Button className='py-1 px-12 bg-primary-light3 text-primary text-base font-medium rounded-md' label='Set Key' />
                    </div>
                    <div className='w-full flex justify-between px-4 py-6 border-b-1'>
                        <div className='flex flex-col'>
                            <span className='text-lg font-medium'>Two- factor authentication</span>
                            <span className='text-secondary-dark'>Set up 2FA to improve the security of your account</span>
                        </div>
                        <Button className='py-1 px-12 bg-primary-light3 text-primary text-base font-medium rounded-md' label='Activate' targetPath='/2fa_auth' />
                    </div>
                    <div className='w-full flex justify-between px-4 py-6'>
                        <div className='flex flex-col'>
                            <span className='text-lg font-medium'>Change Password</span>
                            <span className='text-secondary-dark'>**********</span>
                        </div>
                        <Button className='py-1 px-12 bg-primary-light3 text-primary text-base font-medium rounded-md' label='Change' onClick={showModal} />
                    </div>
                </div>
                <div className="lg:col-span-2"></div>
            </div>
        </div>
    );
}

export default Security;