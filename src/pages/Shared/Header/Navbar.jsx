import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import Activelink from "../ActiveLink/Activelink";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProviders";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handdleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const handleLogout = () => {
        handleLogout()
        console.log('logged outttttttttttttttt');
    }



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


                        <span>
                            {
                                user ? <span className='mb-0 me-3 '>
                                    <Link className="profile-img">
                                        <img style={{ width: '36px' }} className="rounded-circle" src={user?.photoURL} alt="" />
                                    </Link>


                                </span> : ''
                                // <FaUserCircle className='mt-1' style={{ fontSize: '2rem', color: 'black' }}></FaUserCircle>
                            }
                        </span>

                        <span>
                            {
                                user ? <span onClick={handdleLogOut}><button className="primary-btn">Logout</button></span> :



                                    <Link to="/login"><button className="primary-btn">Log In</button></Link>
                            }
                        </span>







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