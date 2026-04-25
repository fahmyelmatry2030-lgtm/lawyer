import React, { useEffect } from 'react';

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

    const openBooking = () => {
        window.dispatchEvent(new CustomEvent('openBookingModal'));
    };

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

                    {/* Info Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', marginBottom: '60px' }}>

                        <div className="reveal contact-info-card" style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid var(--primary-gold)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📍</div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>مدينة 6 أكتوبر</h3>
                            <p style={{ color: 'var(--text-gray)', lineHeight: '1.7' }}>الحي الأول، المجاورة الثانية<br />شارع معهد الفنون التطبيقية، عمارة 266</p>
                        </div>

                        <div className="reveal contact-info-card" style={{ transitionDelay: '0.1s', backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid var(--primary-gold)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📍</div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>الإسكندرية</h3>
                            <p style={{ color: 'var(--text-gray)', lineHeight: '1.7' }}>شارع شامبليون، الأزاريطة<br />(أمام كلية الطب مباشرة)</p>
                        </div>

                        <div className="reveal contact-info-card" style={{ transitionDelay: '0.2s', backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid var(--primary-gold)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📞</div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)', marginBottom: '10px' }}>هاتف وواتساب</h3>
                            <p style={{ color: 'var(--text-gray)' }} dir="ltr">+20 1012177070</p>
                            <p style={{ color: 'var(--text-gray)', marginTop: '6px' }}>mr.ahmedali.lawyeroffice@gmail.com</p>
                        </div>

                        <div className="reveal contact-info-card" style={{ transitionDelay: '0.3s', backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderBottom: '3px solid #dc2626' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🚨</div>
                            <h3 style={{ fontSize: '1.2rem', color: '#dc2626', marginBottom: '10px' }}>حالات الطوارئ - الموقوفون</h3>
                            <p style={{ color: 'var(--text-gray)' }}>للحالات الجنائية العاجلة على مدار 24 ساعة</p>
                            <p style={{ color: '#dc2626', fontWeight: 'bold', marginTop: '6px' }} dir="ltr">+20 1012177070</p>
                        </div>
                    </div>

                    {/* CTA Booking */}
                    <div className="reveal" style={{
                        background: 'linear-gradient(135deg, var(--primary-navy) 0%, #152a4a 100%)',
                        borderRadius: '16px',
                        padding: '60px 40px',
                        textAlign: 'center',
                        border: '1px solid rgba(201,169,110,0.2)'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚖️</div>
                        <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-gold)', marginBottom: '16px' }}>احجز استشارتك القانونية</h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: '0 auto 36px', lineHeight: '1.8' }}>
                            لا تتردد في التواصل معنا — الاستشارة الأولى مجانية وسيتم الرد عليك في أسرع وقت ممكن من قِبَل الأستاذ أحمد عزالدين شخصياً.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={openBooking}
                                style={{
                                    background: 'linear-gradient(135deg, #b8914f, #e8c87a)',
                                    color: '#0a0800',
                                    padding: '16px 44px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    fontWeight: '800',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit'
                                }}
                            >
                                🔒 احجز موعدك الآن
                            </button>
                            <a
                                href={`https://wa.me/201012177070`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: '#25D366',
                                    color: 'white',
                                    padding: '16px 44px',
                                    borderRadius: '6px',
                                    fontWeight: '800',
                                    fontSize: '1.1rem',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                }}
                            >
                                💬 واتساب مباشر
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactPage;
