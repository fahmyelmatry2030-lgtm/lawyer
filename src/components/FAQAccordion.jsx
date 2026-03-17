import React, { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'كيف يمكنني حجز استشارة مبدئية؟',
            answer: 'يمكنك حجز استشارة بكل سهولة من خلال زيارة صفحة "تواصل معنا" وتعبئة النموذج المخصص، أو عبر الاتصال المباشر على أرقام هواتفنا الموضحة في الموقع.'
        },
        {
            question: 'ما هي الأتعاب المتوقعة للقضية؟',
            answer: 'تختلف الأتعاب بناءً على نوع القضية، مدى تعقيدها، والوقت المتوقع لإنجازها. نحن حريصون على الشفافية التامة، وسيتم توضيح تقدير مبدئي للأتعاب خلال الجلسة الاستشارية الأولى.'
        },
        {
            question: 'هل توفرون خدمة الترافع في قضايا الشركات؟',
            answer: 'نعم، نمتلك قسماً متخصصاً بالكامل لقضايا الشركات والأعمال، يشمل صياغة العقود، تأسيس الشركات، وتسوية النزاعات التجارية، وتمثيل الشركات أمام جميع المحاكم.'
        },
        {
            question: 'كم يستغرق البت في القضايا العمالية؟',
            answer: 'تعتمد مدة القضية العمالية على طبيعة الخلاف وإجراءات مكتب العمل والمحكمة العمالية، وعادة ما تتراوح بين بضعة أسابيع إلى عدة أشهر. سنبقيك مطلعاً على كل خطوة.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container reveal">
            {faqs.map((faq, index) => (
                <div
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                >
                    <button
                        className="faq-question"
                        onClick={() => toggleAccordion(index)}
                    >
                        {faq.question}
                        <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer-wrapper">
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
