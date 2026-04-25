import React, { useEffect } from 'react';
import CTASection from '../components/CTASection';

const TeamPage = () => {
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

    const teamMembers = [
        {
            name: 'أحمد محمود',
            role: 'مؤسس وشريك إداري',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            education: 'ماجستير في القانون التجاري من جامعة لندن',
            bio: 'يمتلك أكثر من 15 عاماً من الخبرة في القضايا التجارية المعقدة وتأسيس الشركات المساهمة، مثل كبرى الكيانات الاستثمارية أمام القضاء، وساهم في صياغة عقود ضخمة لشركات دولية.'
        },
        {
            name: 'سارة خالد',
            role: 'مستشار قانوني أول',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            education: 'دكتوراه في القانون المدني من جامعة القاهرة',
            bio: 'متخصصة في قضايا الأحوال الشخصية والنزاعات المدنية وتمثيل العائلات والشركات العائلية. تتميز بقدرتها العالية على حل النزاعات ودياً قبل اللجوء للقضاء محققة نسب نجاح قياسية.'
        },
        {
            name: 'عمر ياسين',
            role: 'محامي استئناف ومجلس دولة',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            education: 'ليسانس حقوق ودبلومة في القانون العام',
            bio: 'خبير في صياغة المذكرات القانونية والمرافعات الشفهية أمام الاستئناف ومحاكم مجلس الدولة. تخصص في النزاعات الإدارية والعمالية.'
        },
        {
            name: 'نور أحمد',
            role: 'محامية متخصصة شركات',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            education: 'ماجستير في قانون الملكية الفكرية',
            bio: 'متخصصة في تسجيل العلامات التجارية وبراءات الاختراع وصياغة عقود التكنولوجيا وحماية بيانات الشركات الناشئة وتقديم الاستشارات التقنية القانونية.'
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header" style={{
                backgroundImage: 'linear-gradient(rgba(11, 25, 44, 0.9), rgba(11, 25, 44, 0.9)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 0 60px',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container reveal">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>نخبة من المستشارين</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        فريق عمل متكامل يدعمه الشغف، الخبرة، وتاريخ طويل من القضايا الناجحة لحماية مصالحك.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                        {teamMembers.map((member, index) => (
                            <div
                                className="team-detailed-card reveal"
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: window.innerWidth > 768 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                                    backgroundColor: 'var(--white)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    alignItems: 'center'
                                }}
                            >
                                <div style={{ flex: '1', minHeight: '350px' }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                                <div style={{ flex: '2', padding: '50px 40px', textAlign: window.innerWidth > 768 ? 'right' : 'center' }}>
                                    <h3 style={{ color: 'var(--primary-gold)', fontSize: '1.2rem', marginBottom: '8px' }}>{member.role}</h3>
                                    <h2 style={{ color: 'var(--primary-navy)', fontSize: '2.2rem', marginBottom: '20px' }}>{member.name}</h2>
                                    <div style={{ display: 'inline-block', backgroundColor: 'var(--bg-light)', padding: '8px 16px', borderRadius: '4px', marginBottom: '24px', color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                                        <i className="fas fa-graduation-cap" style={{ marginLeft: '10px', color: 'var(--primary-navy)' }}></i>
                                        {member.education}
                                    </div>
                                    <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection title="انضم لقائمة عملائنا الناجحين" subtitle="فريقنا المتخصص على أتم الاستعداد لدراسة قضيتك وتقديم الاستشارة الدقيقة والموثوقة." />
        </div>
    );
};

export default TeamPage;
