import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('تم استلام طلبك بنجاح. سنتواصل معك قريباً!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title" style={{ marginBottom: '20px', fontSize: '1.4rem', color: 'var(--primary-navy)' }}>احجز استشارتك</h3>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--primary-navy)', fontWeight: '600' }}>الاسم الكامل</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="محمد أحمد"
                />
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
                <div className="form-group">
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: 'var(--primary-navy)', fontWeight: '600' }}>رقم الهاتف</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05X XXX XXXX"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--primary-navy)', fontWeight: '600' }}>البريد الإلكتروني</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                    />
                </div>
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="service" style={{ display: 'block', marginBottom: '8px', color: 'var(--primary-navy)', fontWeight: '600' }}>الخدمة المطلوبة</label>
                <select
                    id="service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>اختر مجال التخصص...</option>
                    <option value="criminal">القانون الجنائي</option>
                    <option value="family">قضايا الأسرة</option>
                    <option value="corporate">الشركات والأعمال</option>
                    <option value="labor">القضايا العمالية</option>
                    <option value="other">أخرى</option>
                </select>
            </div>

            <div className="form-group" style={{ marginBottom: '25px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: 'var(--primary-navy)', fontWeight: '600' }}>تفاصيل الاستشارة</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="حدثنا باختصار عن مشكلتك القانونية..."
                ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '15px' }}>
                إرسال الطلب
            </button>
        </form>
    );
};

export default ContactForm;
