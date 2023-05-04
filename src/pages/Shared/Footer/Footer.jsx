import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' mt-5' style={{backgroundColor: '#d7d6d6'}}>
            <Container className='py-4'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        <Link className='text-decoration-none text-dark'>Presentations</Link>
                        <Link className='text-decoration-none text-dark'>Professionals</Link>
                        <Link className='text-decoration-none text-dark'>Stores</Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <Link className='text-decoration-none text-dark'>Presentations</Link>
                        <Link className='text-decoration-none text-dark'>Professionals</Link>
                        <Link className='text-decoration-none text-dark'>Stores</Link>
                    </div>

                    <div className='d-flex flex-column'>
                        <Link className='text-decoration-none text-dark'><FaFacebook /> Facebook</Link>
                        <Link className='text-decoration-none text-dark'><FaInstagram /> Instagram</Link>
                        <Link className='text-decoration-none text-dark'><FaTwitter /> Twitter</Link>
                    </div>
                </div>

                <p className='text-center mt-3 mb-0 pb-2'><small>All Rights Resserved By Cooking Master</small></p>
            </Container>

        </div>

    );
};

export default Footer;