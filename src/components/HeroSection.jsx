import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const openBooking = () => {
        window.dispatchEvent(new CustomEvent('openBookingModal'));
    };

    return (
        <section className="hero" id="home">
            <div className="container hero-container-centered">
                <div className="hero-content-centered">

                    <div className="hero-badge">أحمد عزالدين · ماجستير القانون · ١٠+ سنوات خبرة</div>

                    <h1 className="hero-title-main">
                        حقك لا يُضيَّع
                        <span>ما دمنا معك</span>
                    </h1>

                    <div className="hero-divider">
                        <span></span>
                        <i>⚖</i>
                        <span></span>
                    </div>

                    <p className="hero-subtitle-main">
                        سواء كانت قضيتك جنائية، عسكرية، تجارية أو أسرية —<br />
                        نقف بجانبك بدفاع قانوني صلب لا تنازل فيه حتى تُستعاد حقوقك كاملة.
                    </p>

                    <div className="hero-actions-centered">
                        <button onClick={openBooking} className="btn-primary-gold">
                            🔒 استشارة مجانية الآن
                        </button>
                        <a href="#practice-areas" className="btn-outline-gold">
                            تعرف على تخصصاتنا
                        </a>
                    </div>

                    <div className="hero-stats-centered">
                        <div className="stat-item">
                            <h3>+١٠</h3>
                            <p>سنوات خبرة</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>٩٨٪</h3>
                            <p>نسبة النجاح</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>+٥٠٠</h3>
                            <p>قضية رابحة</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>٢٤/٧</h3>
                            <p>متاح للتواصل</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse"></div>
                <p>اكتشف المزيد</p>
            </div>
        </section>
    );
};

export default HeroSection;
