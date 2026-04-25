import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container-centered">
                <div className="hero-content-centered">

                    <div className="hero-badge">مكتب الأستاذ أحمد عزالدين للمحاماة</div>

                    <h1 className="hero-title-main">
                        ريادة قانونية
                        <span>في قلب العدالة</span>
                    </h1>

                    <div className="hero-divider">
                        <span></span>
                        <i>⚖</i>
                        <span></span>
                    </div>

                    <p className="hero-subtitle-main">
                        ماجستير القانون · خبرة ١٠ سنوات في القضاء العسكري والمدني
                        <br />
                        نحمي حقوقك بدفاع صلب واستشارة قانونية دقيقة
                    </p>

                    <div className="hero-actions-centered">
                        <a href="#contact" className="btn-primary-gold">احجز استشارتك الآن</a>
                        <a href="#practice-areas" className="btn-outline-gold">مجالات التخصص</a>
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
