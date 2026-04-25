import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <aside className="admin-sidebar">
            <div className="sidebar-brand">
                <Link to="/admin">
                    المحامي<span>.</span> لوحة التحكم
                </Link>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/admin" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className="icon">📊</span>
                            الرئيسية (نظرة عامة)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/appointments" className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className="icon">📅</span>
                            المواعيد والحجوزات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/messages" className={({ isActive }) => isActive ? 'active' : ''}>
                            <span className="icon">✉️</span>
                            الرسائل والاستفسارات
                        </NavLink>
                    </li>

                    <li className="nav-divider"></li>

                    <li>
                        <Link to="/">
                            <span className="icon">🌍</span>
                            العودة للموقع
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="sidebar-footer">
                <p>نظام الإدارة v1.0</p>
            </div>
        </aside>
    );
};

export default AdminSidebar;
