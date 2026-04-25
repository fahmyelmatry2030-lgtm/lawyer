import React, { useEffect } from 'react';
import CTASection from '../components/CTASection';
import './AboutPage.css';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for new page elements
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

    const values = [
        { icon: '⚖️', title: 'العدل والإنصاف', text: 'نسعى دائماً لتحقيق العدالة وإرجاع الحقوق لأصحابها بكل الطرق القانونية الممكنة.' },
        { icon: '🛡️', title: 'الأمان والسرية', text: 'نلتزم التزاماً كاملاً بالحفاظ على أسرار عملائنا وخصوصية ملفاتهم وقضاياهم.' },
        { icon: '💡', title: 'الابتكار القانوني', text: 'لا نكتفي بالطرق التقليدية، بل نبحث عن حلول مبتكرة واستراتيجيات دفاعية حديثة.' },
        { icon: '🤝', title: 'الشراكة والثقة', text: 'نعتبر العميل شريكاً نجاح، ولذلك نبني علاقاتنا على أساس من الثقة والمصداقية.' }
    ];

    return (
        <div className="page-container">
            <div className="page-header" style={{
                backgroundImage: 'linear-gradient(rgba(11, 25, 44, 0.8), rgba(11, 25, 44, 0.8)), url(/lawyer.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 0 60px',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container reveal">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>من نحن</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        تعرف على تاريخنا، رؤيتنا، والقيم التي تحكم مسيرتنا المهنية في الدفاع عن عملائنا.
                    </p>
                </div>
            </div>

            <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="about-detailed-grid">
                        <div className="reveal">
                            <h4 className="subtitle">رسالتنا ورؤيتنا</h4>
                            <h2 className="section-title">نحن هنا لحماية أعمالك وحياتك</h2>
                             <p style={{ marginBottom: '20px', color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                في مكتب الأستاذ أحمد عزالدين، نؤمن بأن المحاماة ليست مجرد تمثيل أمام القضاء، بل هي فن في التعامل مع المشكلات وتحويلها إلى فرص. يقود المكتب الأستاذ أحمد عزالدين، الحاصل على ماجستير القانون، بخبرة تمتد لأكثر من ١٠ سنوات في القضاء العسكري والمدني.
                            </p>
                            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                                رسالتنا هي تقديم أفضل الخدمات والاستشارات القانونية بمهنية عالية وشفافية مطلقة، لضمان حماية حقوق عملائنا ومصالحهم. رؤيتنا أن نكون الوجهة القانونية الأولى والموثوقة من خلال الجمع بين الخبرة الأكاديمية العميقة والممارسة العملية المتميزة.
                            </p>
                        </div>
                        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                            <img
                                src="/lawyer.jpg"
                                alt="الأستاذ أحمد عزالدين"
                                className="about-page-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center reveal">
                        <h4 className="subtitle">مبادئنا</h4>
                        <h2 className="section-title">القيم التي تحكم عملنا</h2>
                    </div>

                    <div className="values-grid">
                        {values.map((val, idx) => (
                            <div className="value-box reveal" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="val-icon">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline/History Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="text-center reveal">
                        <h4 className="subtitle">تاريخنا</h4>
                        <h2 className="section-title">مسيرة من النجاحات</h2>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item reveal">
                            <div className="tl-year">2014</div>
                            <div className="tl-content">
                                <h3>بداية المسيرة المهنية</h3>
                                <p>بدأ الأستاذ أحمد عزالدين مسيرته القانونية بالتركيز على قضايا القضاء العسكري والمدني.</p>
                            </div>
                        </div>
                        <div className="timeline-item reveal" style={{ transitionDelay: '0.1s' }}>
                            <div className="tl-year">2018</div>
                            <div className="tl-content">
                                <h3>الحصول على الماجستير</h3>
                                <p>تعزيز الخبرة العملية بالدراسة الأكاديمية والحصول على درجة الماجستير في القانون.</p>
                            </div>
                        </div>
                        <div className="timeline-item reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="tl-year">2021</div>
                            <div className="tl-content">
                                <h3>تأسيس المكتب الخاص</h3>
                                <p>إطلاق المكتب بفرعيه في 6 أكتوبر والإسكندرية لتقديم خدمات قانونية متكاملة.</p>
                            </div>
                        </div>
                        <div className="timeline-item reveal" style={{ transitionDelay: '0.3s' }}>
                            <div className="tl-year">2024</div>
                            <div className="tl-content">
                                <h3>الريادة الرقمية</h3>
                                <p>تطوير الخدمات القانونية الرقمية والتوسع في تقديم الاستشارات للأفراد والشركات.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default AboutPage;
