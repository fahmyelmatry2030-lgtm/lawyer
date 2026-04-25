import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="page-container">
            <div className="page-header" style={{
                backgroundColor: 'var(--primary-navy)',
                padding: '120px 0 60px',
                textAlign: 'center',
                color: 'white',
                borderBottom: '4px solid var(--primary-gold)'
            }}>
                <div className="container reveal">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>تواصل معنا</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        نحن متواجدون للرد على استفساراتكم وحجز الاستشارات القانونية في أسرع وقت.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-light">
                <div className="container">

                    {/* Quick Info Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <div className="reveal contact-info-card" style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid var(--primary-gold)' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--primary-navy)', marginBottom: '20px' }}>🕒</div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>ساعات العمل</h3>
                            <p style={{ color: 'var(--text-gray)' }}>الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                            <p style={{ color: 'var(--text-gray)' }}>الجمعة والسبت: مغلق</p>
                        </div>

                        <div className="reveal contact-info-card" style={{ transitionDelay: '0.1s', backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid var(--primary-gold)' }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--primary-navy)', marginBottom: '20px' }}>📞</div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>التواصل المباشر</h3>
                            <p style={{ color: 'var(--text-gray)' }} dir="ltr">+966 50 123 4567</p>
                            <p style={{ color: 'var(--text-gray)' }}>info@lawfirm.com</p>
                        </div>

                        <div className="reveal contact-info-card" style={{ transitionDelay: '0.2s', backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid #dc2626' }}>
                            <div style={{ fontSize: '2.5rem', color: '#dc2626', marginBottom: '20px' }}>🚨</div>
                            <h3 style={{ fontSize: '1.3rem', color: '#dc2626', marginBottom: '10px' }}>حالات الطوارئ الموقوفين</h3>
                            <p style={{ color: 'var(--text-gray)' }}>للحالات الجنائية العاجلة على مدار 24 ساعة</p>
                            <p style={{ color: 'var(--text-gray)', fontWeight: 'bold' }} dir="ltr">+966 50 999 0000</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'start' }}>
                        <div className="reveal" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>دعنا نسمع منك</h3>
                            <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>قم بتعبئة النموذج التالي وسيقوم أحد ممثلينا بالتواصل معك في أقرب وقت لترتيب موعد الاستشارة.</p>
                            <ContactForm />
                        </div>

                        <div className="reveal" style={{ height: '100%', minHeight: '500px', backgroundColor: '#e5e7eb', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                            {/* Larger map view */}
                            <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '1.5rem', background: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80) center/cover', opacity: '0.6' }}>

                            </div>
                            <div style={{ position: 'absolute', inset: '0', backgroundColor: 'rgba(11, 25, 44, 0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '40px' }}>
                                <i className="fas fa-map-marker-alt" style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '20px' }}></i>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>المقر الرئيسي</h3>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '300px' }}>برج الأعمال، الدور الخامس<br />طريق الملك فهد، العليا<br />الرياض، المملكة العربية السعودية</p>
                                <a href="#" className="btn-primary" style={{ marginTop: '20px', backgroundColor: 'transparent', border: '2px solid var(--primary-gold)', color: 'var(--primary-gold)' }}>احصل على الاتجاهات</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
