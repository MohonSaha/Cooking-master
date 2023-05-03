import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Subcribe.css'

const Subscribe = () => {
    return (
        <Container>
            <div className='rounded-3 text-center px-5 pt-5' style={{ backgroundColor: '#d63012', height: '300px', marginTop: '100px' }}>
                <h2 className='text-white '>Be the first to know about the latest deals, receive new trending recipes & more!</h2>


                <div className='mt-4'>
                    <input placeholder='Email Address' type="text" className='custom-input'/>
                    <button className='cooking-secondary-btn ms-3 subscribe-btn'>Subscribe</button>
                </div>
            </div>
        </Container>
    );
};

export default Subscribe;