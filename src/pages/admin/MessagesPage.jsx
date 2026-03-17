import React, { useState } from 'react';
import { useAdminData } from '../../context/AdminDataContext';

const MessagesPage = () => {
    const { messages, markMessageRead, deleteMessage } = useAdminData();
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(null);

    const filtered = messages.filter(msg =>
        !search || msg.name.includes(search) || msg.subject.includes(search)
    );

    const handleView = (msg) => {
        setSelected(msg);
        if (!msg.read) markMessageRead(msg.id);
    };

    const getStatusBadge = (read) => {
        return read
            ? <span className="badge" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>مقروءة</span>
            : <span className="badge warning" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>جديدة</span>;
    };

    return (
        <div className="messages-page">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2>الرسائل والاستفسارات</h2>
                    <p>الوارد من نموذج صفحة تواصل معنا</p>
                </div>
                <span style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', padding: '4px 12px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: '600' }}>
                    {messages.filter(m => !m.read).length} رسالة جديدة
                </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1.3fr' : '1fr', gap: '20px', alignItems: 'start' }}>
                {/* Message List */}
                <div className="box-card" style={{ padding: 0, overflow: 'hidden' }}>
                    <div className="box-header" style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <input
                            type="text"
                            placeholder="بحث في الرسائل..."
                            style={{ width: '100%' }}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <div style={{ overflow: 'hidden' }}>
                        {filtered.map(msg => (
                            <div
                                key={msg.id}
                                onClick={() => handleView(msg)}
                                style={{
                                    padding: '16px 20px',
                                    borderBottom: '1px solid #f1f5f9',
                                    cursor: 'pointer',
                                    backgroundColor: selected?.id === msg.id ? 'rgba(197,163,101,0.06)' : !msg.read ? 'rgba(59,130,246,0.03)' : 'transparent',
                                    borderRight: selected?.id === msg.id ? '3px solid #C5A365' : '3px solid transparent',
                                    transition: 'background 0.15s',
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                                    <span style={{ fontWeight: msg.read ? '500' : '700', color: '#1e293b', fontSize: '0.93rem' }}>{msg.name}</span>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        {getStatusBadge(msg.read)}
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{msg.date}</span>
                                    </div>
                                </div>
                                <div style={{ fontWeight: msg.read ? '400' : '600', color: '#334155', fontSize: '0.86rem', marginBottom: '4px' }}>{msg.subject}</div>
                                <div style={{ fontSize: '0.82rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.message}</div>
                            </div>
                        ))}
                        {filtered.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>لا توجد رسائل تطابق البحث</div>
                        )}
                    </div>
                </div>

                {/* Message Detail Panel */}
                {selected && (
                    <div className="box-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
                            <h3 style={{ margin: 0, fontSize: '1rem', color: '#1e293b' }}>{selected.subject}</h3>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    onClick={() => { deleteMessage(selected.id); setSelected(null); }}
                                    style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: 'none', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: '600' }}
                                >
                                    🗑️ حذف
                                </button>
                                <button onClick={() => setSelected(null)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '0.9rem' }}>✕</button>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px' }}>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>الاسم</div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>{selected.name}</div>
                            </div>
                            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px' }}>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>رقم الجوال</div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }} dir="ltr">{selected.phone}</div>
                            </div>
                            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px' }}>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>البريد الإلكتروني</div>
                                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.88rem' }} dir="ltr">{selected.email}</div>
                            </div>
                            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px' }}>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>تاريخ الإرسال</div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>{selected.date}</div>
                            </div>
                        </div>

                        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '18px', lineHeight: '1.8', color: '#334155', fontSize: '0.93rem' }}>
                            {selected.message}
                        </div>

                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <a
                                href={`tel:${selected.phone}`}
                                style={{ flex: 1, textAlign: 'center', background: 'linear-gradient(135deg, #C5A365, #a88240)', color: '#0f172a', borderRadius: '10px', padding: '11px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                📞 اتصال بالعميل
                            </a>
                            <a
                                href={`mailto:${selected.email}`}
                                style={{ flex: 1, textAlign: 'center', background: '#f1f5f9', color: '#475569', borderRadius: '10px', padding: '11px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                ✉️ إرسال بريد
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagesPage;
