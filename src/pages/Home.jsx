import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PracticeAreas from '../components/PracticeAreas';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const elementsToReveal = document.querySelectorAll(
            '.section-title, .subtitle, .area-card, .team-card, .about-image, .about-content, .contact-info-side, .contact-form-side'
        );

        elementsToReveal.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <HeroSection />
            <AboutSection />
            <PracticeAreas />
            <TeamSection />
            <ContactSection />
        </>
    );
};

export default Home;
