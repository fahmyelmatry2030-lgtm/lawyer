import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
<<<<<<< HEAD
                        <h2 className="footer-logo">أحمد عزالدين<span>.</span></h2>
=======
                        <h2 className="footer-logo">المحامي<span>.</span></h2>
>>>>>>> 0a61a76403f59325c0669a1dd9469b85b179f3da
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
<<<<<<< HEAD
                            <li>📍 6 أكتوبر: الحي الأول، شارع معهد الفنون التطبيقية</li>
                            <li>📍 الإسكندرية: الأزاريطة، شارع شامبليون</li>
                            <li dir="ltr" style={{textAlign: 'right'}}>📞 +20 1012177070</li>
                            <li>📧 mr.ahmedali.lawyeroffice@gmail.com</li>
=======
                            <li>📍 123 شارع العدالة، مدينة الرياض</li>
                            <li>📞 +966 50 123 4567</li>
                            <li>📧 info@almohami.com</li>
                            <li>🕒 الأحد - الخميس: 9 ص - 5 م</li>
>>>>>>> 0a61a76403f59325c0669a1dd9469b85b179f3da
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
<<<<<<< HEAD
                    <p>&copy; {new Date().getFullYear()} مكتب الأستاذ أحمد عزالدين للمحاماة. جميع الحقوق محفوظة.</p>
=======
                    <p>&copy; {new Date().getFullYear()} مكتب المحامي للاستشارات القانونية. جميع الحقوق محفوظة.</p>
>>>>>>> 0a61a76403f59325c0669a1dd9469b85b179f3da
                </div>
            </div>
        </footer>
    );
};

export default Footer;
