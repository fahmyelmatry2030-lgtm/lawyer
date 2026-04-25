import React, { useState } from 'react';
import { useAdminData } from '../../context/AdminDataContext';

const AppointmentsPage = () => {
    const { appointments, confirmAppointment, cancelAppointment, deleteAppointment } = useAdminData();
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending': return <span className="badge warning">قيد الانتظار</span>;
            case 'confirmed': return <span className="badge primary">مؤكد</span>;
            case 'completed': return <span className="badge success">مكتمل</span>;
            case 'cancelled': return <span className="badge" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>ملغي</span>;
            default: return <span className="badge">غير معروف</span>;
        }
    };

    const getMethodIcon = (method) => {
        switch (method) {
            case 'office': return '🏢 حضوري';
            case 'online': return '💻 عن بعد';
            case 'phone': return '📞 هاتفي';
            default: return method;
        }
    };

    const filteredAppointments = appointments
        .filter(app => filter === 'all' || app.status === filter)
        .filter(app => {
            if (!search) return true;
            return app.name.includes(search) || app.phone.includes(search);
        });

    return (
        <div className="appointments-page">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>المواعيد والحجوزات</h2>
                    <p>إدارة طلبات الاستشارة الواردة من العملاء</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '4px 12px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: '600' }}>
                        {appointments.filter(a => a.status === 'pending').length} قيد الانتظار
                    </span>
                </div>
            </div>

            <div className="box-card">
                <div className="box-header">
                    <div className="filter-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {[
                            { key: 'all', label: 'الكل' },
                            { key: 'pending', label: 'قيد الانتظار' },
                            { key: 'confirmed', label: 'المؤكدة' },
                            { key: 'completed', label: 'المنتهية' },
                            { key: 'cancelled', label: 'الملغاة' },
                        ].map(f => (
                            <button
                                key={f.key}
                                className={`action-btn ${filter === f.key ? 'active' : ''}`}
                                style={{ padding: '7px 14px', fontSize: '0.85rem' }}
                                onClick={() => setFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <div className="header-search" style={{ marginTop: 0 }}>
                        <input
                            type="text"
                            placeholder="بحث برقم الجوال أو الاسم..."
                            style={{ width: '240px' }}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>رقم الطلب</th>
                                <th>اسم العميل</th>
                                <th>رقم التواصل</th>
                                <th>نوع الاستشارة</th>
                                <th>طريقة الاستشارة</th>
                                <th>الموعد والتاريخ</th>
                                <th>الحالة</th>
                                <th>إجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments.map(app => (
                                <tr key={app.id}>
                                    <td style={{ fontWeight: 'bold', color: '#64748b' }}>#{app.id}</td>
                                    <td>{app.name}</td>
                                    <td dir="ltr" style={{ textAlign: 'right' }}>{app.phone}</td>
                                    <td>{app.type}</td>
                                    <td>{getMethodIcon(app.method)}</td>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span>{app.date}</span>
                                            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{app.time}</span>
                                        </div>
                                    </td>
                                    <td>{getStatusBadge(app.status)}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            {app.status === 'pending' && (
                                                <button
                                                    onClick={() => confirmAppointment(app.id)}
                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#10b981', padding: '5px', fontSize: '1.1rem' }}
                                                    title="تأكيد الموعد"
                                                >✅</button>
                                            )}
                                            {app.status === 'pending' && (
                                                <button
                                                    onClick={() => cancelAppointment(app.id)}
                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f59e0b', padding: '5px', fontSize: '1.1rem' }}
                                                    title="إلغاء الموعد"
                                                >🚫</button>
                                            )}
                                            <button
                                                onClick={() => deleteAppointment(app.id)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '5px', fontSize: '1.1rem' }}
                                                title="حذف"
                                            >🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredAppointments.length === 0 && (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                                        لا توجد مواعيد تطابق البحث أو الفلتر المحدد
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;
