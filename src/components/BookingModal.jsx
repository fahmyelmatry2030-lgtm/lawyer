import React, { useState, useEffect } from 'react';
import './BookingModal.css';

const BookingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        consultationType: 'office', // office, online, phone
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        notes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Listen for custom event to open modal from anywhere (Navbar, CTA, etc.)
    useEffect(() => {
        const handleOpenModal = () => {
            setIsOpen(true);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };

        window.addEventListener('openBookingModal', handleOpenModal);
        return () => window.removeEventListener('openBookingModal', handleOpenModal);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Restore background scrolling
        // Reset form after closing animation
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ consultationType: 'office', service: '', date: '', time: '', name: '', phone: '', notes: '' });
        }, 300);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, submit data to backend API
        setIsSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div className={`booking-overlay ${isOpen ? 'show' : ''}`} onClick={closeModal}>
            <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeModal}>&times;</button>

                {isSubmitted ? (
                    <div className="success-state text-center">
                        <div className="success-icon">✓</div>
                        <h2>تم تأكيد طلبك بنجاح!</h2>
                        <p>سيتواصل معك فريقنا في أقرب وقت لتأكيد الموعد النهائي للاستشارة.</p>
                        <button className="btn-primary" onClick={closeModal}>إغلاق النافذة</button>
                    </div>
                ) : (
                    <>
                        <div className="booking-header">
                            <h2>حجز موعد استشارة</h2>
                            <p>خطوة واحدة تفصلك عن الحصول على أفضل خدمة قانونية</p>
                        </div>

                        <form className="booking-form" onSubmit={handleSubmit}>

                            <div className="form-section">
                                <h4>1. نوع الاستشارة</h4>
                                <div className="radio-group">
                                    <label className={`radio-card ${formData.consultationType === 'office' ? 'active' : ''}`}>
                                        <input type="radio" name="consultationType" value="office" checked={formData.consultationType === 'office'} onChange={handleChange} />
                                        <span className="icon">🏢</span>
                                        حضور للمكتب
                                    </label>
                                    <label className={`radio-card ${formData.consultationType === 'online' ? 'active' : ''}`}>
                                        <input type="radio" name="consultationType" value="online" checked={formData.consultationType === 'online'} onChange={handleChange} />
                                        <span className="icon">💻</span>
                                        عن بعد (Zoom)
                                    </label>
                                    <label className={`radio-card ${formData.consultationType === 'phone' ? 'active' : ''}`}>
                                        <input type="radio" name="consultationType" value="phone" checked={formData.consultationType === 'phone'} onChange={handleChange} />
                                        <span className="icon">📞</span>
                                        مكالمة هاتفية
                                    </label>
                                </div>
                            </div>

                            <div className="form-section">
                                <h4>2. التفاصيل والموعد</h4>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>مجال الاستشارة *</label>
                                        <select name="service" value={formData.service} onChange={handleChange} required className="form-control">
                                            <option value="" disabled>اختر مجال التخصص...</option>
                                            <option value="criminal">القانون الجنائي</option>
                                            <option value="corporate">قضايا الشركات</option>
                                            <option value="family">الأحوال الشخصية</option>
                                            <option value="labor">النزاعات العمالية</option>
                                            <option value="other">استشارة عامة</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>التاريخ المقترح *</label>
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>الوقت المفضل *</label>
                                        <input type="time" name="time" value={formData.time} onChange={handleChange} required className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h4>3. بيانات التواصل</h4>
                                <div className="form-grid">
                                    <div className="form-group full-width">
                                        <label>الاسم الكامل *</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="الاسم الرباعي" className="form-control" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>رقم الجوال *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="05X XXX XXXX" className="form-control" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>ملاحظات إضافية (اختياري)</label>
                                        <textarea name="notes" value={formData.notes} onChange={handleChange} rows="2" placeholder="اكتب نبذة مختصرة عن موضوع الاستشارة..." className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="booking-footer">
                                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '16px' }}>
                                    تأكيد الحجز
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
