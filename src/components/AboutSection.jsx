import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section section-padding" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1505664159858-62024227303e?auto=format&fit=crop&q=80"
                                alt="Lawyer at desk"
                            />
                            <div className="experience-badge">
                                <span className="years">+10</span>
                                <span className="text">سنوات من<br />التميز</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <h4 className="subtitle">من نحن</h4>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>نلتزم بتحقيق العدالة وحماية حقوقك</h2>
                        <p className="lead-text">
                            مكتب المحامي أحمد عزالدين هو صرح قانوني رائد تأسس على مبادئ النزاهة، الشفافية، والتفاني المطلق في خدمة عملائنا. نحن نتفهم تعقيدات النظام القانوني ونعمل جاهدين لتقديم حلول مبتكرة وفعالة.
                        </p>
                        <p className="description">
                            يضم مكتبنا نخبة من المحامين والمستشارين ذوي الخبرة الواسعة في مختلف فروع القانون، بقيادة الأستاذ أحمد عزالدين الحاصل على درجة الماجستير في القانون. نقدم لك الدعم القانوني الشامل الذي يحقق أهدافك بأعلى درجات الاحترافية.
                        </p>

                        <div className="core-values">
                            <div className="value-item">
                                <div className="value-icon">⚖️</div>
                                <div className="value-text">
                                    <h5>النزاهة والشفافية</h5>
                                    <p>نعمل بوضوح تام مع عملائنا في كل خطوة.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">🛡️</div>
                                <div className="value-text">
                                    <h5>الاحترافية العالية</h5>
                                    <p>دفاع صلب وحلول قانونية مبنية على دراسة عميقة.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
