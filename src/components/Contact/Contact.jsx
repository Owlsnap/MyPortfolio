import React, { useEffect } from "react";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Contact() {

    useEffect(() => {
        const backToTopButton = document.querySelector(".back__to__top__button");
        const fallingLetters = document.querySelectorAll(".falling-letter");
        const contactSection = document.querySelector(".contact");

        const handleScroll = () => {
            // Back to top button logic
            if(window.scrollY > 100) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }

            // Simple falling letters animation logic
            const contactRect = contactSection.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.7; // Trigger when 70% in view

            if (contactRect.top <= triggerPoint && contactRect.bottom >= 0) {
                fallingLetters.forEach((letter, index) => {
                    const delay = parseFloat(letter.getAttribute('data-delay')) * 1000;
                    
                    setTimeout(() => {
                        letter.classList.add('animate');
                    }, delay);
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <footer className="contact" id="contact">
            {/* Main CTA Section */}
            <div className="contact__cta__section">
                <h1 className="contact__main__title">
                    <span className="falling-letter" data-delay="0">L</span>
                    <span className="falling-letter" data-delay="0.05">E</span>
                    <span className="falling-letter" data-delay="0.1">T</span>
                    <span className="falling-letter" data-delay="0.15">'</span>
                    <span className="falling-letter" data-delay="0.2">S</span>
                    <span className="falling-letter space" data-delay="0.25"> </span>
                    <span className="falling-letter" data-delay="0.3">C</span>
                    <span className="falling-letter" data-delay="0.35">R</span>
                    <span className="falling-letter" data-delay="0.4">E</span>
                    <span className="falling-letter" data-delay="0.45">A</span>
                    <span className="falling-letter" data-delay="0.5">T</span>
                    <span className="falling-letter" data-delay="0.55">E</span>
                </h1>
                <h2 className="contact__sub__title">
                    <span className="falling-letter" data-delay="0.6">S</span>
                    <span className="falling-letter" data-delay="0.65">O</span>
                    <span className="falling-letter" data-delay="0.7">M</span>
                    <span className="falling-letter" data-delay="0.75">E</span>
                    <span className="falling-letter" data-delay="0.8">T</span>
                    <span className="falling-letter" data-delay="0.85">H</span>
                    <span className="falling-letter" data-delay="0.9">I</span>
                    <span className="falling-letter" data-delay="0.95">N</span>
                    <span className="falling-letter" data-delay="1">G</span>
                    <span className="falling-letter space" data-delay="1.05"> </span>
                    <span className="falling-letter" data-delay="1.1">A</span>
                    <span className="falling-letter" data-delay="1.15">M</span>
                    <span className="falling-letter" data-delay="1.2">A</span>
                    <span className="falling-letter" data-delay="1.25">Z</span>
                    <span className="falling-letter" data-delay="1.3">I</span>
                    <span className="falling-letter" data-delay="1.35">N</span>
                    <span className="falling-letter" data-delay="1.4">G</span>
                </h2>
                <p className="contact__description">
                    Ready to bring your vision to life? Whether you have a project in mind or just want to say hello, I'm all ears.
                </p>
            </div>

            {/* Contact Details Section */}
            <div className="contact__details__section">
                <div className="contact__info__grid">
                    <div className="contact__column">
                        <h3 className="contact__column__title">GET IN TOUCH</h3>
                        <div className="contact__item">
                            <EmailOutlinedIcon className="contact__detail__icon"/>
                            <span>alexblom8@gmail.com</span>
                        </div>
                        <div className="contact__item">
                            <PhoneAndroidIcon className="contact__detail__icon"/>
                            <span>(+46) 0704375199</span>
                        </div>
                    </div>

                    <div className="contact__column">
                        <h3 className="contact__column__title">FOLLOW ME</h3>
                        <div className="contact__social__links">
                            <a href="https://www.linkedin.com/in/alex-blom-9240932a4/" target="_blank" rel="noreferrer" className="contact__social__link">
                                <LinkedInIcon className="contact__social__icon"/>
                                <span>LINKEDIN</span>
                            </a>
                            <a href="https://github.com/Owlsnap" target="_blank" rel="noreferrer" className="contact__social__link">
                                <GitHubIcon className="contact__social__icon"/>
                                <span>GITHUB</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact__column">
                        <h3 className="contact__column__title">BASED IN</h3>
                        <div className="contact__location">
                            <span className="contact__city">STOCKHOLM,</span>
                            <span className="contact__country">SWEDEN</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="contact__footer__bottom">
                <div className="contact__footer__content">
                    <span className="contact__copyright">© 2025 ALEX BLOM</span>
                    <div className="contact__nav__links">
                        <a href="#hero" className="contact__nav__link">HOME</a>
                        <a href="#projects" className="contact__nav__link">PROJECTS</a>
                        <a href="#about" className="contact__nav__link">ABOUT</a>
                    </div>
                </div>
            </div>

            <a className="back__to__top__button" href="#hero"><ArrowUpwardIcon/></a>
        </footer>
    );
}

export default Contact;