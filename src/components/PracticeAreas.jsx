import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const PracticeAreas = () => {
    const areas = [
        {
            id: 1,
            title: 'القانون الجنائي',
            icon: '⚖️',
            description: 'دفاع قوي ومدروس في كافة القضايا الجنائية لضمان المحاكمة العادلة وحماية حقوق المتهمين.'
        },
        {
            id: 2,
            title: 'قضايا الأسرة والأحوال',
            icon: '👨‍👩‍👧‍👦',
            description: 'معالجة قضايا الطلاق، النفقة، الحضانة والمواريث بسرية تامة وحلول تحفظ الكيان الأسري.'
        },
        {
            id: 3,
            title: 'الشركات والأعمال',
            icon: '🏢',
            description: 'تأسيس الشركات، صياغة العقود التجارية، وحل النزاعات بين الشركاء وحماية الملكية الفكرية.'
        },
        {
            id: 4,
            title: 'القضايا العمالية',
            icon: '💼',
            description: 'تمثيل العمال وأصحاب العمل في نزاعات الأجور، الفصل التعسفي، ومكافآت نهاية الخدمة.'
        },
        {
            id: 5,
            title: 'العقود والاتفاقيات',
            icon: '📝',
            description: 'دراسة وصياغة كافة أنواع العقود لضمان الحماية القانونية التامة من الثغرات المستقبلية.'
        },
        {
            id: 6,
            title: 'النزاعات العقارية',
            icon: '🏠',
            description: 'تسوية النزاعات المتعلقة بالملكية، الإيجارات، عقود البناء والتطوير العقاري.'
        }
    ];

    return (
        <section className="practice-areas section-padding" id="practice-areas">
            <div className="container">
                <div className="text-center">
                    <h4 className="subtitle">خدماتنا القانونية</h4>
                    <h2 className="section-title">مجالات التخصص</h2>
                    <p className="section-description">
                        نغطي مجموعة واسعة من المجالات القانونية بخبرة واحترافية لتلبية كافة احتياجات عملائنا.
                    </p>
                </div>

                <div className="areas-grid">
                    {areas.map((area) => (
                        <div className="area-card" key={area.id}>
                            <div className="area-icon">{area.icon}</div>
                            <h3 className="area-title">{area.title}</h3>
                            <p className="area-description">{area.description}</p>
                            <Link to="/contact" className="area-link">
                                طلب استشارة <span>←</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
