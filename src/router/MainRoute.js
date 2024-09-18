import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Main/Home';
import Deposit from '../pages/Main/Deposit';
import DepositDetail from '../pages/Main/DepositDetail';
import DepositHistory from '../pages/Main/DepositHistory';
import MainLayout from '../components/Main/MainLayout';
import Authentication from '../pages/Main/Authentication';
import Profile from '../pages/Main/Profile';
import Security from '../pages/Main/Security';
import SupportTicket from '../pages/Main/SupportTicket';
import ProtectedRoute from '../components/protectedRoute'; // Import the ProtectedRoute component

export default function Router() {
    return useRoutes([
        {
            path: '/home',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <Home />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/deposit',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <Deposit />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/deposit_detail',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <DepositDetail />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/deposit_history',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <DepositHistory />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/2fa_auth',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <Authentication />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/profile',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <Profile />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/setting',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <Security />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        {
            path: '/support_ticket',
            element: (
                <ProtectedRoute>
                    <MainLayout>
                        <SupportTicket />
                    </MainLayout>
                </ProtectedRoute>
            ),
        },
        // Add any other public routes here
    ]);
}