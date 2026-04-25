import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = ({
    title = "هل تبحث عن استشارة قانونية دقيقة؟",
    subtitle = "نحن هنا لمساعدتك في اتخاذ قرارات قانونية سليمة وحماية حقوقك بأعلى درجات الاحترافية.",
    buttonText = "احجز استشارتك الآن"
}) => {
    return (
        <section className="cta-section section-padding">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title reveal">{title}</h2>
                    <p className="cta-subtitle reveal">{subtitle}</p>
                    <div className="cta-action reveal">
                        <button
                            className="btn-primary"
                            style={{ padding: '16px 48px', fontSize: '1.2rem', fontFamily: 'inherit' }}
                            onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
