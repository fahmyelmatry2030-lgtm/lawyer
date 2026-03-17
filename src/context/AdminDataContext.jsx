import React, { createContext, useContext, useState } from 'react';

const AdminDataContext = createContext(null);

const initialAppointments = [
    { id: '101', name: 'أحمد عبد الله', phone: '0501112222', type: 'القانون الجنائي', date: '2026-03-10', time: '10:00 ص', status: 'pending', method: 'office' },
    { id: '102', name: 'سارة محمد', phone: '0553334444', type: 'الشركات والأعمال', date: '2026-03-11', time: '01:00 م', status: 'confirmed', method: 'online' },
    { id: '103', name: 'خالد بن فهد', phone: '0595556666', type: 'أحوال شخصية', date: '2026-03-12', time: '04:30 م', status: 'confirmed', method: 'phone' },
    { id: '104', name: 'نورة السالم', phone: '0547778888', type: 'النزاعات العمالية', date: '2026-03-05', time: '11:00 ص', status: 'completed', method: 'office' },
    { id: '105', name: 'شركة الأفق المحدودة', phone: '0509990000', type: 'الشركات والأعمال', date: '2026-03-14', time: '09:00 ص', status: 'pending', method: 'online' },
    { id: '106', name: 'فاطمة العمري', phone: '0561234567', type: 'القانون الجنائي', date: '2026-03-15', time: '03:00 م', status: 'pending', method: 'phone' },
];

const initialMessages = [
    { id: 'm1', name: 'محمد القحطاني', email: 'mq@example.com', phone: '0512345678', subject: 'استفسار عن قضية تجارية', message: 'أريد الاستفسار عن إجراءات رفع دعوى تجارية ضد أحد الموردين الذي أخل بالعقد.', date: '2026-03-02', read: false },
    { id: 'm2', name: 'ريم الشمري', email: 'rs@example.com', phone: '0523456789', subject: 'طلب استشارة عائلية', message: 'أحتاج إلى استشارة قانونية متعلقة بقضية حضانة أطفال، أرجو التواصل معي.', date: '2026-03-01', read: false },
    { id: 'm3', name: 'تركي الغامدي', email: 'tg@example.com', phone: '0534567890', subject: 'استفسار عن عقد عمل', message: 'تعرضت لفسخ عقد عمل دون وجه حق وأريد معرفة حقوقي القانونية.', date: '2026-02-28', read: true },
    { id: 'm4', name: 'هنوف الدوسري', email: 'hd@example.com', phone: '0545678901', subject: 'قضية عقارية', message: 'لدي نزاع على ملكية قطعة أرض وأحتاج لاستشارة قانونية عاجلة.', date: '2026-02-27', read: true },
    { id: 'm5', name: 'بندر العسيري', email: 'ba@example.com', phone: '0556789012', subject: 'شراكة تجارية', message: 'أرغب في الاستشارة حول صياغة عقد شراكة تجارية واحتياجاتي القانونية.', date: '2026-02-26', read: true },
];

export const AdminDataProvider = ({ children }) => {
    const [appointments, setAppointments] = useState(initialAppointments);
    const [messages, setMessages] = useState(initialMessages);

    const confirmAppointment = (id) => {
        setAppointments(prev =>
            prev.map(app => app.id === id ? { ...app, status: 'confirmed' } : app)
        );
    };

    const cancelAppointment = (id) => {
        setAppointments(prev =>
            prev.map(app => app.id === id ? { ...app, status: 'cancelled' } : app)
        );
    };

    const deleteAppointment = (id) => {
        setAppointments(prev => prev.filter(app => app.id !== id));
    };

    const markMessageRead = (id) => {
        setMessages(prev =>
            prev.map(msg => msg.id === id ? { ...msg, read: true } : msg)
        );
    };

    const deleteMessage = (id) => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
    };

    const unreadCount = messages.filter(m => !m.read).length;
    const pendingCount = appointments.filter(a => a.status === 'pending').length;

    return (
        <AdminDataContext.Provider value={{
            appointments,
            messages,
            confirmAppointment,
            cancelAppointment,
            deleteAppointment,
            markMessageRead,
            deleteMessage,
            unreadCount,
            pendingCount,
        }}>
            {children}
        </AdminDataContext.Provider>
    );
};

export const useAdminData = () => {
    const context = useContext(AdminDataContext);
    if (!context) throw new Error('useAdminData must be used within AdminDataProvider');
    return context;
};
