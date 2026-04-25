import React, { useEffect } from 'react';
import PracticeAreas from '../components/PracticeAreas';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const PracticeAreasPage = () => {
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
                backgroundImage: 'linear-gradient(rgba(11, 25, 44, 0.9), rgba(11, 25, 44, 0.9)), url(https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 0 60px',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container reveal">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>مجالات التخصص</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        نقدم مجموعة متكاملة من الخدمات القانونية الشاملة لتغطية كافة احتياجاتك.
                    </p>
                </div>
            </div>

            <div style={{ paddingTop: '40px' }}>
                <PracticeAreas />
            </div>

            {/* Deep Dive Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="text-center reveal">
                        <h4 className="subtitle">تغطية قانونية شاملة</h4>
                        <h2 className="section-title">لماذا تختار تخصصاتنا؟</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 50px', color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            نعتقد أن التخصص هو مفتاح النجاح القانوني. لذلك قمنا بتأسيس أقسام متخصصة يديرها محامون يمتلكون سنوات طويلة من الخبرة في كل مجال حصراً، مما يضمن حصولك على أدق الاستشارات وأقوى خطوط الدفاع لضمان موقفك القانوني بكل قوة.
                        </p>
                    </div>

                    <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                        <div className="reveal" style={{ backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '8px', borderRight: '4px solid var(--primary-navy)' }}>
                            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.5rem', marginBottom: '16px' }}>تمثيل قانوني أمام جميع المحاكم</h3>
                            <p style={{ color: 'var(--text-gray)', lineHeight: '1.7' }}>
                                يتولى فريقنا الدفاع والمرافعة أمام المحاكم الابتدائية، الاستئناف، والمحكمة العليا بكفاءة عالية واقتدار، لضمان مرافعة قوية مدعمة بالأدلة الدامغة والسوابق القضائية.
                            </p>
                        </div>
                        <div className="reveal" style={{ transitionDelay: '0.2s', backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '8px', borderRight: '4px solid var(--primary-gold)' }}>
                            <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.5rem', marginBottom: '16px' }}>صياغة العقود والاتفاقيات</h3>
                            <p style={{ color: 'var(--text-gray)', lineHeight: '1.7' }}>
                                نقوم بصياغة ومراجعة كافة أنواع العقود التجارية، المدنية، والعمالية لضمان خلوها من الثغرات القانونية وحماية حقوق ومصالح عملائنا من أي نزاعات مستقبلية محتملة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="text-center reveal">
                        <h4 className="subtitle">استفسارات شائعة</h4>
                        <h2 className="section-title">الأسئلة المتكررة</h2>
                    </div>

                    <FAQAccordion />
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default PracticeAreasPage;
