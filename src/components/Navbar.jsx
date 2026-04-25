import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Make navbar solid if not on home page, or if scrolled down
    const isHomePage = location.pathname === '/';
    const shouldBeSolid = scrolled || !isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${shouldBeSolid ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <div className="logo-emblem">⚖</div>
                        <div className="logo-text-group">
                            <span className="logo-name">أحمد عزالدين</span>
                            <span className="logo-tagline">محامٍ ومستشار قانوني</span>
                        </div>
                    </Link>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <NavLink to="/" end onClick={() => setMobileMenuOpen(false)}>الرئيسية</NavLink>
                    <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>من نحن</NavLink>
                    <NavLink to="/practice-areas" onClick={() => setMobileMenuOpen(false)}>مجالات التخصص</NavLink>
                    <NavLink to="/team" onClick={() => setMobileMenuOpen(false)}>فريق العمل</NavLink>
                    <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</NavLink>
                    <button
                        className="btn-book-nav"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            window.dispatchEvent(new CustomEvent('openBookingModal'));
                        }}
                    >
                        حجز موعد
                    </button>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
