import React from 'react';
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Dashboard/Home';
import DashboardLayout from '../components/Dashboard/DashboardLayout';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: (
                <DashboardLayout>
                    <Home />
                </DashboardLayout>
            ),
        }
    ]);
}