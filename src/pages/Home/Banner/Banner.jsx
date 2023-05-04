import React from 'react';
import banner from '../../../assets/banners/banner.jpg'
import { Container, Image } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Container className='mt-5'>
            <Image className='rounded-3 carousel-inner' style={{height:'500px', width: '100%'}} src={banner}/>

            <div style={{width: '600px', bottom: '280px'}} className=' banner-container'>
                <h2 className='text-light fs-1 w-75'>Choose from thousands of recipes</h2>
                <p className='text-light'>Good recipes services prioritize customer experience by offering user-friendly interfaces, personalized recommendations, and the ability to save favorite recipes. They also often provide community features, such as user reviews and ratings.</p>
            </div>

        </Container>
    );
};

export default Banner;