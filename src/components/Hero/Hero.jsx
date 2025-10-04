import React from "react";
import "./Hero.css";
import heroImage from "../../assets/Alex-hero-img.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
          <h1 className="hero__title">
            Hello, I'm <span className="hero__name">Alex Blom</span>
          </h1>
          <img id="image" src={heroImage} alt="alex" />
          <div className="subtitle__CTA">
            <p className="hero__subtitle">Web developer</p>
            <a href="#projects" className="hero__cta">
              View my work
            </a>
          </div>
      </div>
      <div className="about" id="about">
            <span id="aboutTop">
                {" "}
                I'm a passionate web developer with a knack for crafting captivating
                digital experiences and thinking outside the box. With a specialization in React and a special
                affection for CSS wizardry and unique design, I thrive on turning
                ideas into visually stunning and highly functional websites and web
                applications. I'm exceptionally good at working with AI assistance, and I can bring your vision to life in no-time with clean, efficient code and a keen eye for detail.
            </span>
            <span id="aboutMiddle">
                I'm always eager to learn new technologies and have recently found strong passions for Web3 development, security, and AI development.
                Alongside improving my skills in web development, I'm also learning Solidity and how to build decentralized applications with smart contracts.
                I spend my free time working on personal projects and brainstorming innovative AI-driven solutions.
            </span>
            <span id="aboutBottom">
                Beyond my love for coding, I bring a diverse background that adds depth to my work. I'm not just your average developer; I'm also deeply passionate about fitness and bodybuilding. In fact, before diving into the world of web development, I spent some years as a health coach and personal trainer. This unique blend of experiences fuels my creativity and problem-solving skills, allowing me to approach challenges with a tough mentality and persistence.
            </span>
        </div>

    </section>
  );
}

export default Hero;
