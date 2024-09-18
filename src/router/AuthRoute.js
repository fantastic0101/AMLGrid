import React from 'react';
import { useRoutes } from 'react-router-dom'
import AuthLayout from '../components/Auth/AuthLayout';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

export default function Router() {
    return useRoutes([
        {
            path: '/signin',
            element: (
                <AuthLayout>
                    <SignIn/>
                </AuthLayout>
            ),
        },
        {
            path: '/signup',
            element: (
                <AuthLayout>
                    <SignUp/>
                </AuthLayout>
            ),
        }
    ]);
}