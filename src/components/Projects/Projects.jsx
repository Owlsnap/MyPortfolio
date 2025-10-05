import React from "react";
import "./Projects.css";
import spotifyOne from "../../assets/spotifyfull.png";
import spotifyTwo from "../../assets/spotify2.png";
import flagOne from "../../assets/flag.png";
import flagTwo from "../../assets/flag2.png";
import klarna from "../../assets/klarna.png";
import password from "../../assets/passwordgenerator.png";
import advice from "../../assets/advice.png";
import todo from "../../assets/TODO-app-img.png";
import bookstoreOne from "../../assets/bookstoreImageOne.png";
import bookstoreTwo from "../../assets/bookstoreImgTwo.jpg";
import supplementScannerOne from "../../assets/suppscanner_img1.jpg";
import supplementScannerTwo from "../../assets/suppscanner_img2.jpg";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="project">

            {/* SuppplementScanner project */}
          <div className="double-project-image">
            <img
              src={supplementScannerOne}
              alt="supplementscanner"
              className="project__image"
            />
            <img
              src={supplementScannerTwo}
              alt="supplementscanner"
              className="project__image__slide"
            />
          </div>
          <div className="project__info">
            <h2>AI-powered Supplement Comparison Tool</h2>
            <p>
                A web application that scrapes and compares
                dietary supplements, providing users with price per unit, 
                all automatically collected and calculated using AI.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.supplementscanner.io/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* bookstore project */}
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
              className="project__image__slide"
            />
          </div>
          <div className="project__info">
            <h2>E-Bookstore with admin dashboard</h2>
            <p>
              E-commerce site with login functionality, checkout and admin
              dashboard to manage products.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://e-bookstore-app.vercel.app/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* todo app */}
        <div className="project">
          <div className="project__image__container">
            <img src={todo} alt="advice generator" className="project__image" />
          </div>
          <div className="project__info">
            <h2>ToDo app</h2>
            <p>
              Modern task manager to add, edit and complete todos, all stored locally with ability to search and filter in the todo list.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://to-do-app-rho-mocha.vercel.app/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* spotify project */}
        <div className="project">
          <div className="double-project-image">
            <img src={spotifyOne} alt="spotify" className="project__image" />
            <img
              src={spotifyTwo}
              alt="spotify"
              className="project__image__slide"
            />
          </div>
          <div className="project__info">
            <h2>Spotify Clone</h2>
            <p>Connect to your personal spotify with the Spotify API.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fastidious-beignet-9f0e97.netlify.app"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* flag app */}
        <div className="project">
          <div className="double-project-image">
            <img src={flagOne} alt="flag app" className="project__image" />
            <img
              src={flagTwo}
              alt="flag app"
              className="project__image__slide"
            />
          </div>
          <div className="project__info">
            <h2>Flag App</h2>
            <p>
              Explore and discover facts about countries around the globe and
              navigate through borders. Done with REST Countries API.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://world-flag-app.netlify.app/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* klarna project */}
        <div className="project">
          <div className="project__image__container">
            <img src={klarna} alt="klarna" className="project__image" />
          </div>
          <div className="project__info">
            <h2>Klarna Checkout</h2>
            <p>
              Set up a checkout with Klarna for your E-commerce/online store.
              Demo from Klarna
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://demo.klarna.dev/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* password generator */}
        <div className="project">
          <div className="project__image__container">
            <img
              src={password}
              alt="password generator"
              className="project__image"
            />
          </div>
          <div className="project__info">
            <h2>Password Generator</h2>
            <p>
              Generate randomized passwords and copy to clipboard with options
              to include numbers, symbols and upper/lowercase letters.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://vocal-platypus-ce75c7.netlify.app/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

        {/* advice generator */}
        <div className="project">
          <div className="project__image__container">
            <img src={advice} alt="advice generator" className="project__image" />
          </div>
          <div className="project__info">
            <h2>Advice Generator</h2>
            <p>Get random advice from the Advice Slip API.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://timely-clafoutis-221a8f.netlify.app/"
              className="project__cta"
            >
              View project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
