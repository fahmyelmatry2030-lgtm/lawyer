import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminData } from '../../context/AdminDataContext';

const AdminHeader = () => {
    const navigate = useNavigate();
    const { unreadCount, pendingCount } = useAdminData();
    const totalAlerts = unreadCount + pendingCount;

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin/login', { replace: true });
    };

    return (
        <header className="admin-header">
            <div className="header-search">
                <input type="text" placeholder="ابحث عن ملف عميل، رقم قضية..." />
            </div>

            <div className="header-actions">
                <button className="notification-btn" title="إشعارات" style={{ position: 'relative' }}>
                    <span className="icon">🔔</span>
                    {totalAlerts > 0 && (
                        <span className="badge" style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#ef4444', color: '#fff', fontSize: '0.7rem', minWidth: '18px', height: '18px', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                            {totalAlerts}
                        </span>
                    )}
                </button>

                <div className="admin-profile">
                    <div className="avatar">م</div>
                    <div className="profile-info">
                        <span className="name">مدير النظام</span>
                        <span className="role">صلاحيات كاملة</span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    title="تسجيل الخروج"
                    style={{
                        background: 'rgba(239,68,68,0.08)',
                        border: '1px solid rgba(239,68,68,0.2)',
                        borderRadius: '10px',
                        color: '#ef4444',
                        padding: '8px 14px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'background 0.2s',
                        fontFamily: 'inherit',
                    }}
                >
                    🚪 خروج
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;
