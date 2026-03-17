import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const team = [
        {
            id: 1,
            name: 'أحمد محمود',
            role: 'مؤسس ومحامي نقض',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
        },
        {
            id: 2,
            name: 'سارة خالد',
            role: 'مستشارة قانونية - شركات',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
        },
        {
            id: 3,
            name: 'عمر طارق',
            role: 'محامي استئناف',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
        }
    ];

    return (
        <section className="team-section section-padding" id="team">
            <div className="container">
                <div className="text-center">
                    <h4 className="subtitle">نخبة من الخبراء</h4>
                    <h2 className="section-title">فريق العمل</h2>
                    <p className="section-description">
                        نفخر بوجود نخبة من أكفأ المحامين والمستشارين القانونيين الملتزمين بتحقيق أفضل النتائج لعملائنا.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member) => (
                        <div className="team-card" key={member.id}>
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-social">
                                    <a href="#">in</a>
                                    <a href="#">x</a>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
