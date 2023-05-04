import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import Activelink from "../ActiveLink/Activelink";
import { Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProviders";
import profile from '../../../assets/logos/user.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handdleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }



    return (
        <Container>

            <div className="Navbar">
                <span className="nav-logo fs-3 ms-0 cooking-primary">Cooking Master</span>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Activelink to="/">Home</Activelink>
                    <Activelink to="/about">About Us</Activelink>
                    <Activelink to="/blog">Blog</Activelink>
                        <Link className="profile-item" to=""><FaSearch /></Link>
                        <span className="profile-item">
                            {
                                user ? <span className='mb-0 me-3 '>


                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id='my-tooltip-id'>
                                                {user?.displayName}
                                            </Tooltip>
                                        }
                                    >
                                        <Link to='/profile' className="profile-img">
                                            <img style={{ width: '38px', height: '38px' }} className="rounded-circle" src={user?.photoURL ? user?.photoURL : profile} alt="" />
                                        </Link>
                                    </OverlayTrigger>


                                </span> : ''


                                // <FaUserCircle className='mt-1' style={{ fontSize: '2rem', color: 'black' }}></FaUserCircle>
                            }
                        </span>

                        <span className="profile-item">
                            {
                                user ? <span onClick={handdleLogOut}><button className="primary-btn">Logout</button></span> :



                                    <Link to="/login"><button className="primary-btn">Log In</button></Link>
                            }
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