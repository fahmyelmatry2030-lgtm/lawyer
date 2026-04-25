import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const PracticeAreas = () => {
    const areas = [
        {
            id: 1,
            title: 'القضاء العسكري والشرطي',
            icon: '🛡️',
            description: 'تخصص دقيق في القضايا العسكرية ومجالس التأديب الخاصة بضباط الشرطة.'
        },
        {
            id: 2,
            title: 'تأسيس الشركات',
            icon: '🏢',
            description: 'تأسيس الشركات بجميع أنواعها، تسجيل العلامات التجارية، وخدمات التوثيق المعتمدة.'
        },
        {
            id: 3,
            title: 'القانون المدني والتجاري',
            icon: '⚖️',
            description: 'خبرة واسعة في التقاضي المدني وفض المنازعات التجارية بين الأفراد والشركات.'
        },
        {
            id: 4,
            title: 'الأحوال الشخصية',
            icon: '👨‍👩‍👧‍👦',
            description: 'تولي قضايا الأسرة، المواريث، والإجراءات القانونية لزواج الأجانب.'
        },
        {
            id: 5,
            title: 'قضايا العقارات والإيجارات',
            icon: '🏠',
            description: 'التعامل مع نزاعات الإيجار القديم والمسائل القانونية المتعلقة بالعقارات.'
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
