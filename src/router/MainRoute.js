import React from 'react';
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Main/Home';
import Deposit from '../pages/Main/Deposit';
import DepositDetail from '../pages/Main/DepositDetail';
import DepositHistory from '../pages/Main/DepositHistory';
import MainLayout from '../components/Main/MainLayout';
import Authentication from '../pages/Main/Authentication';
import Profile from '../pages/Main/Profile';
import Security from '../pages/Main/Security';
import SupportTicket from '../pages/Main/SupportTicket';

export default function Router() {
    return useRoutes([
        {
            path: '/home',
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            ),
        },
        {
            path: '/deposit',
            element: (
                <MainLayout>
                    <Deposit />
                </MainLayout>
            ),
        },
        {
            path: '/deposit_detail',
            element: (
                <MainLayout>
                    <DepositDetail />
                </MainLayout>
            ),
        },
        {
            path: '/deposit_history',
            element: (
                <MainLayout>
                    <DepositHistory />
                </MainLayout>
            ),
        },
        {
            path: '/2fa_auth',
            element: (
                <MainLayout>
                    <Authentication />
                </MainLayout>
            ),
        },
        {
            path: '/profile',
            element: (
                <MainLayout>
                    <Profile />
                </MainLayout>
            ),
        },
        {
            path: '/security',
            element: (
                <MainLayout>
                    <Security />
                </MainLayout>
            ),
        },
        {
            path: '/support_ticket',
            element: (
                <MainLayout>
                    <SupportTicket />
                </MainLayout>
            ),
        },
    ]);
}