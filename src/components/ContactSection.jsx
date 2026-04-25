import React from 'react';
import ContactForm from './ContactForm';
import './ContactSection.css';

const ContactSection = () => {

    return (
        <section className="contact-section section-padding" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info-side">
                        <h4 className="subtitle">تواصل معنا</h4>
                        <h2 className="section-title dark-bg">نحن هنا لمساعدتك والاستماع إليك</h2>
                        <p className="contact-description">
                            لا تتردد في التواصل معنا لحجز استشارة أو طرح أي استفسار قانوني. فريقنا متواجد دائمًا لتقديم الدعم اللازم.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon">📍</div>
                                <div>
                                    <h5>مدينة 6 أكتوبر</h5>
                                    <p>الحي الأول، المجاورة الثانية، شارع معهد الفنون التطبيقية، عمارة 266</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">📍</div>
                                <div>
                                    <h5>الإسكندرية</h5>
                                    <p>شارع شامبليون، الأزاريطة (أمام كلية الطب مباشرة)</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">📞</div>
                                <div>
                                    <h5>هاتف التواصل وواتساب</h5>
                                    <p dir="ltr">+20 1012177070</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">📧</div>
                                <div>
                                    <h5>البريد الإلكتروني</h5>
                                    <p>mr.ahmedali.lawyeroffice@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-side">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
