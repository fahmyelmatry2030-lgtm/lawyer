import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    الخبرة والموثوقية <br />
                    <span>في كل قضية</span>
                </h1>
                <p className="hero-subtitle">
                    نقدم لك دفاعاً قوياً واستشارات قانونية دقيقة لحماية حقوقك ومصالحك بأعلى معايير الاحترافية والشفافية.
                </p>
                <div className="hero-actions">
                    <a href="#contact" className="btn-primary">احجز استشارتك الآن</a>
                    <a href="#about" className="btn-outline light">تعرف على المكتب</a>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <h3>+١٥</h3>
                        <p>سنة خبرة</p>
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
        </section>
    );
};

export default HeroSection;
