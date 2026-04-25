import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">مكتب الأستاذ أحمد عزالدين للمحاماة</div>
                    <h1 className="hero-title">
                        الخبرة والموثوقية <br />
                        <span>في كل قضية</span>
                    </h1>
                    <p className="hero-subtitle">
                        دفاع صلب واستشارات قانونية دقيقة تحت إشراف الأستاذ أحمد عزالدين، الحاصل على ماجستير القانون وخبير القضاء العسكري والشرطي.
                    </p>
                    
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">احجز استشارتك الآن</a>
                        <a href="#about" className="btn-outline light">تعرف على المكتب</a>
                    </div>

                    <div className="hero-stats">
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
                
                <div className="hero-image-wrapper">
                    <div className="hero-image-card">
                        <img src="/lawyer.jpg" alt="الأستاذ أحمد عزالدين" className="hero-lawyer-img" />
                        <div className="image-gold-border"></div>
                        <div className="experience-float-badge">
                            <span className="years">M.L</span>
                            <span className="text">ماجستير القانون</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hero-decoration">
                <div className="glow-1"></div>
                <div className="glow-2"></div>
            </div>
        </section>
    );
};

export default HeroSection;
