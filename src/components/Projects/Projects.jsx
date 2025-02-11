import React from "react";
import "./Projects.css";
import spotifyOne from "../../assets/spotifyfull.png";
import spotifyTwo from "../../assets/spotify2.png";
import flagOne from "../../assets/flag.png";
import flagTwo from "../../assets/flag2.png";
import klarna from "../../assets/klarna.png";
import password from "../../assets/passwordgenerator.png";
import advice from "../../assets/advice.png";
import todo from "../../assets/todo.png";
import bookstoreOne from "../../assets/bookstoreImageOne.png";
import bookstoreTwo from "../../assets/bookstoreImgTwo.jpg";



function Projects() {
    return (
        <section className="projects" id="projects">
        <h1>Projects</h1>
        <div className="projects__container">


        <div className="project">
                <div className="double-project-image">
                    <img
                        src={bookstoreOne}
                        alt="bookstore"
                        className="project__image"
                    />
                    <img
                        src={bookstoreTwo}
                        alt="bookstore"
                        className="project__image__slide__flag"
                    />
                </div>
            <div className="project__info">
                <h2>E-Bookstore with admin dashboard</h2>
                <p>
                E-commerce site with login functionality, checkout and admin dashboard to manage products.
                </p>
                <a target="_blank" rel="noreferrer" href="https://e-bookstore-app.vercel.app/" className="project__cta">
                View project
                </a>
            </div>
            </div>


            {/* spotify project */}
            <div className="project">
                <div className="double-project-image">
                    <img
                        src={spotifyOne}
                        alt="spotify"
                        className="project__image"
                    />
                    <img
                        src={spotifyTwo}
                        alt="spotify"
                        className="project__image__slide"
                    />
                </div>
            <div className="project__info">
                <h2>Spotify Clone</h2>
                <p>
                Connect to your personal spotify with the Spotify API.
                </p>
                <a target="_blank" rel="noreferrer" href="https://fastidious-beignet-9f0e97.netlify.app" className="project__cta">
                View project
                </a>
            </div>
            </div>


            {/* flag app */}
            <div className="project">
            <div className="double-project-image">
                    <img
                        src={flagOne}
                        alt="flag app"
                        className="project__image"
                    />
                    <img
                        src={flagTwo}
                        alt="flag app"
                        className="project__image__slide__flag"
                    />
                </div>
            <div className="project__info">
                <h2>Flag App</h2>
                <p>
                Explore and discover facts about countries around the globe and navigate through borders. 
                Done with REST Countries API.
                </p>
                <a target="_blank" rel="noreferrer" href="https://661fef747b102661b80139b6--jazzy-churros-740e99.netlify.app/" className="project__cta">
                View project
                </a>
            </div>
            </div>


            {/* klarna project */}
            <div className="project">
            <img
                src={klarna}
                alt="klarna"
                className="project__image"
            />
            <div className="project__info">
                <h2>Klarna Checkout</h2>
                <p>
                Set up a checkout with Klarna for your E-commerce/online store. Demo from Klarna
                </p>
                <a target="_blank" rel="noreferrer" href="https://demo.klarna.dev/" className="project__cta">
                View project
                </a>
            </div>
            </div>


            {/* password generator */}
            <div className="project">
            <img
                src={password}
                alt="password generator"
                className="project__image"
            />
            <div className="project__info">
                <h2>Password Generator</h2>
                <p>
                Generate randomized passwords and copy to clipboard with options to include numbers, symbols and upper/lowercase letters.
                </p>
                <a target="_blank" rel="noreferrer" href="https://vocal-platypus-ce75c7.netlify.app/" className="project__cta">
                View project
                </a>
            </div>
            </div>


            {/* advice generator */}
            <div className="project">
            <img
                src={advice}
                alt="advice generator"
                className="project__image"
            />
            <div className="project__info">
                <h2>Advice Generator</h2>
                <p>
                Get random advice from the Advice Slip API.
                </p>
                <a target="_blank" rel="noreferrer" href="https://timely-clafoutis-221a8f.netlify.app/" className="project__cta">
                View project
                </a>
            </div>
            </div>


            {/* todo app */}
            <div className="project">
            <img
                src={todo}
                alt="advice generator"
                className="project__image"
            />
            <div className="project__info">
                <h2>ToDo app</h2>
                <p>
                Simple ToDo app, list and check off tasks or use as a shopping list.
                </p>
                <a target="_blank" rel="noreferrer" href="https://tangerine-sundae-64a168.netlify.app/" className="project__cta">
                View project
                </a>
            </div>
            </div>





        </div>
        </section>
    );
}

export default Projects;

