import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <h2 className="footer-logo">المحامي<span>.</span></h2>
                        <p>مكتب استشارات قانونية ومحاماة رائد، ملتزم بتقديم خدمات الدفاع والتمثيل القانوني بأعلى معايير الاحترافية والمصداقية لعملائنا.</p>
                    </div>

                    <div className="footer-links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/practice-areas">مجالات التخصص</Link></li>
                            <li><Link to="/team">فريق العمل</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>معلومات التواصل</h3>
                        <ul>
                            <li>📍 123 شارع العدالة، مدينة الرياض</li>
                            <li>📞 +966 50 123 4567</li>
                            <li>📧 info@almohami.com</li>
                            <li>🕒 الأحد - الخميس: 9 ص - 5 م</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} مكتب المحامي للاستشارات القانونية. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
