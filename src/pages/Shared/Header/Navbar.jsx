import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">Cooking Master</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to="/">Home</Link>
                <Link to="/statistics">Recipe</Link>
                <Link to="/cart">Contract</Link>
                <Link to="/blog">Blog</Link>
                <span className="apply-btn nav-items">
                    <Link to="/statistics"><FaSearch/></Link>
                    <Link to="/cart">Sign In</Link>
                    <Link to="/blog"><button className="primary-btn">Sign Up</button></Link>
                </span>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;