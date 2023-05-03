import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import Activelink from "../ActiveLink/Activelink";
import { Container } from "react-bootstrap";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>

            <div className="Navbar">
                <span className="nav-logo fs-3 ms-0">Cooking Master</span>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Activelink to="/">Home</Activelink>
                    <Activelink to="/cart">Contract</Activelink>
                    <Activelink to="/about">About Us</Activelink>
                    <Activelink to="/blog">Blog</Activelink>
                    <span className="apply-btn nav-items">
                        <Link to=""><FaSearch /></Link>
                        <Link to="/login"><button className="primary-btn">Log In</button></Link>
                    </span>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;