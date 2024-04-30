import React from "react";
import "./Navbar.css";


function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__logo">AVB</h1>
            </div>
            <div>
                <div className="navbar__links">
                    <a target="__" href="#projects" className="navbar__link">Projects</a>
                    <a target="__" href="#technologies" className="navbar__link">Tech</a>
                    <a target="__" href="#contact" className="navbar__link">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar