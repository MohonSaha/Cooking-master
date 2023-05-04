import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>

            <div className='mt-3'>
                <h4>Connect With Him</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook className='text-primary' /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                    <ListGroup.Item> <FaLinkedin className='text-danger' /> Linkedin</ListGroup.Item>
                    <ListGroup.Item> <FaDiscord className='text-danger' /> Discord</ListGroup.Item>
                </ListGroup>
            </div>


            <Container className='mt-5 p-0'>
                <h4>Contribution</h4>
                <iframe className='rounded-2' width="100%" height="315"
                    src="https://www.youtube.com/embed/WV4XWBYolj0" title="YouTube video player">
                </iframe>
            </Container>
        </div>
    );
};

export default RightNav;