import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import './Admin.css';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            {/* Sidebar Navigation */}
            <AdminSidebar />

            {/* Main Content Area */}
            <div className="admin-main">
                <AdminHeader />

                <div className="admin-content-wrapper">
                    {/* This Outlet will render the nested admin pages (Dashboard, Appointments, etc.) */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
