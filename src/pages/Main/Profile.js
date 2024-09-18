import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackComponent from '../../components/BackComponent';
import Button from '../../components/Button';
import { Modal, Input, Form, message } from 'antd';
import { serverUrl } from '../../utils/url';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in local storage
                const response = await axios.get(`${serverUrl}/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUserInfo(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
        form.setFieldsValue(userInfo); // Pre-fill the form with current user info
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const token = localStorage.getItem('token');

            // Send request to change profile
            axios.post(`${serverUrl}/change_profile`, {
                name: values.name,
                email: values.email
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                message.success(response.data.message);
                setUserInfo(values); // Update local state with new values
                setIsModalOpen(false);
            })
            .catch(error => {
                message.error(error.response?.data?.message || 'Error updating profile');
            });

        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading profile: {error.message}</div>;
    }

    return (
        <div className="p-4 sm:p-6 bg-white">
            <Modal
                title="Edit Profile"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="save" className='bg-primary-light2 text-primary py-2 px-4 mr-4 rounded-lg' label='Save' onClick={handleOk} />,
                    <Button key="cancel" className='bg-white border-1 border-secondary py-2 px-4 rounded-lg' label='Cancel' onClick={handleCancel} />,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input className='border-1 border-secondary-light rounded-lg' placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                    >
                        <Input className='border-1 border-secondary-light rounded-lg' placeholder="Email" />
                    </Form.Item>
                </Form>
            </Modal>

            <div className="grid w-full mx-auto gap-4 sm:gap-8 lg:gap-8 xl:gap-0 grid-cols-1 lg:grid-cols-12">
                <BackComponent title="Profile" targetPath="/home" />
                <div className="lg:col-span-2"></div>
                <div className="lg:col-span-8 mt-8 sm:mt-16 border border-secondary-light shadow-custom-light-1 shadow-custom-light-2 p-4 sm:p-8 rounded-md flex flex-col justify-center items-center">
                    <div className='w-full flex justify-between'>
                        <span className='text-xl font-medium'>My Profile</span>
                        <Button className='p-2 border-1 border-secondary-light rounded-md' icon='/assets/images/pencil.svg' iconPosition='left' onClick={showModal}/>
                    </div>
                    <div className='w-full py-2'>
                        <span className='text-lg text-secondary-dark'>Name:</span>
                        <span className='text-xl text-black pl-8'>{userInfo.name}</span>
                    </div>
                    <div className='w-full py-2'>
                        <span className='text-lg text-secondary-dark'>Email:</span>
                        <span className='text-xl text-black pl-8'>{userInfo.email}</span>
                    </div>
                </div>
                <div className="lg:col-span-2"></div>
            </div>
        </div>
    );
}

export default Profile;