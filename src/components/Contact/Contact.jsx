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
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });
    }, []);



    return (
        <section className="contact" id="contact">
            <h1>Contact</h1>
            <div className="contact__container">
                <div className="contact__info">
                    <h2>Ready to bring your vision to life?</h2>
                    <p>
                    Let's connect! Whether you have a project in mind or just want to say hello, I'm all ears. Drop me a line on the platforms below, and let's start creating something amazing together.
                    </p>
                </div>
                <div>
                    <div className="contact__icons">
                        <a href="https://www.linkedin.com/in/alex-blom-9240932a4/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className="contact__icon"/>
                        </a>
                        <a href="https://github.com/Owlsnap" target="_blank" rel="noreferrer">
                            <GitHubIcon className="contact__icon"/>
                        </a>
                        <div className="email__phone__icon__container">
                            <PhoneAndroidIcon className="contact__icon"/>
                            <span>(+46) 0704375199</span>
                        </div>
                        <div className="email__phone__icon__container">
                            <EmailOutlinedIcon className="contact__icon"/>
                            <span>alexblom8@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <a className="back__to__top__button" href="#hero"><ArrowUpwardIcon/></a>
        </section>
    );
}

export default Contact;