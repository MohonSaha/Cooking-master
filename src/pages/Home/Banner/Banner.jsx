import React from 'react';
import banner from '../../../assets/banners/banner.jpg'
import { Container, Image } from 'react-bootstrap';
import './Banner.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <Container>
            <div className='mt-5 carousel-inner'>
                <Image className='rounded-3 ' style={{ height: '500px', width: '100%' }} src={banner} />

                <div style={{ width: '600px', bottom: '280px' }} className=' banner-container'>
                    <h2 className='text-light fs-1 w-75'>Choose from thousands of recipes</h2>
                    <p className='text-light'>Good recipes services prioritize customer experience by offering user-friendly interfaces, personalized recommendations, and the ability to save favorite recipes. They also often provide community features, such as user reviews and ratings.</p>
                    <p><Link to='blog' className='text-decoration-none text-light fw-bold fs-4'>Learn More <FaArrowRight></FaArrowRight></Link></p>
                </div>


            </div>
        </Container>
    );
};

export default Banner;