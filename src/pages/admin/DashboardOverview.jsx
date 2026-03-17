import React from 'react';
import { Link } from 'react-router-dom';
import { useAdminData } from '../../context/AdminDataContext';

const DashboardOverview = () => {
    const { appointments, messages, pendingCount, unreadCount } = useAdminData();

    const confirmedCount = appointments.filter(a => a.status === 'confirmed').length;
    const recentAppointments = appointments.slice(0, 4);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending': return <span className="badge warning">قيد الانتظار</span>;
            case 'confirmed': return <span className="badge primary">مؤكد</span>;
            case 'completed': return <span className="badge success">مكتمل</span>;
            case 'cancelled': return <span className="badge" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>ملغي</span>;
            default: return null;
        }
    };

    return (
        <div className="dashboard-overview">
            <div className="page-header">
                <h2>نظرة عامة</h2>
                <p>ملخص نشاط المكتب — مرحباً بك مجدداً ⚖️</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>📅</div>
                    <div className="stat-details">
                        <h3>مواعيد معلقة</h3>
                        <span className="stat-number">{pendingCount}</span>
                        <span className="stat-trend" style={{ color: pendingCount > 0 ? '#f59e0b' : '#10b981' }}>
                            {pendingCount > 0 ? '⚠️ تحتاج مراجعة' : '✅ لا توجد معلقة'}
                        </span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}>✅</div>
                    <div className="stat-details">
                        <h3>مواعيد مؤكدة</h3>
                        <span className="stat-number">{confirmedCount}</span>
                        <span className="stat-trend positive">↑ مؤكدة</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>✉️</div>
                    <div className="stat-details">
                        <h3>رسائل جديدة</h3>
                        <span className="stat-number">{unreadCount}</span>
                        <span className="stat-trend" style={{ color: unreadCount > 0 ? '#ef4444' : '#10b981' }}>
                            {unreadCount > 0 ? '● لم تُقرأ بعد' : '✅ تم القراءة'}
                        </span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(197,163,101,0.1)', color: 'var(--primary-gold, #C5A365)' }}>⚖️</div>
                    <div className="stat-details">
                        <h3>إجمالي الحجوزات</h3>
                        <span className="stat-number">{appointments.length}</span>
                        <span className="stat-trend positive">↑ إجمالي النظام</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-content-grid">
                <div className="recent-activity box-card">
                    <div className="box-header">
                        <h3>أحدث المواعيد المحجوزة</h3>
                        <Link to="/admin/appointments" className="text-btn">عرض الكل</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>العميل</th>
                                    <th>نوع الاستشارة</th>
                                    <th>التاريخ</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentAppointments.map(app => (
                                    <tr key={app.id}>
                                        <td>{app.name}</td>
                                        <td>{app.type}</td>
                                        <td>{app.date}</td>
                                        <td>{getStatusBadge(app.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="quick-actions box-card">
                    <div className="box-header">
                        <h3>إجراءات سريعة</h3>
                    </div>
                    <div className="action-buttons">
                        <Link to="/admin/appointments" className="action-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="icon">📅</span> إدارة المواعيد
                        </Link>
                        <Link to="/admin/messages" className="action-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="icon">✉️</span>
                            مراجعة الرسائل
                            {unreadCount > 0 && (
                                <span style={{ marginRight: 'auto', background: '#ef4444', color: '#fff', borderRadius: '999px', padding: '1px 8px', fontSize: '0.75rem', fontWeight: '700' }}>{unreadCount}</span>
                            )}
                        </Link>
                        <a href="/" className="action-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="icon">🌐</span> عرض الموقع العام
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
