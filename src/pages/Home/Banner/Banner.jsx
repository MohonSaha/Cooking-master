import React from 'react';
import banner from '../../../assets/banners/banner.jpg'
import { Container, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='mt-5'>
            <Image className='rounded-3 position-relative' style={{height:'400px', width: '100%'}} src={banner}/>

            <div style={{width: '600px', bottom: '280px'}} className='position-absolute start-50 me-5 pe-5 banner-container'>
                <h2 className='text-light fs-1'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro incidunt beatae, unde accusantium repudiandae voluptatibus?</p>
            </div>
        </Container>
    );
};

export default Banner;