import React from 'react';
import picture1 from '../../../assets/banners/carousel1.jpg'
import picture2 from '../../../assets/banners/carousel2.jpg'
import picture3 from '../../../assets/banners/carousel3.jpg'
import { Carousel, Container } from 'react-bootstrap';

const CarouselItam = () => {
    return (
        <Container className='my-5'>
            <h2 className='mb-4'>Top chefs of the year: <span className='cooking-primary'>2023</span></h2>
            <Carousel className='position-relative'>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded-2"
                        src='https://xploringindia.in/wp-content/uploads/2022/01/Chef-Shipra-Khanna.jpg'
                        alt="First slide"
                        style={{height: '400px'}}

                    />
                    {/* <Carousel.Caption>
                        <h3 className='text-light'>Chef Shipra Khanna</h3>
                        <p>Chef Shipra Khanna is an Indian celebrity chef, restaurateur, author and a Television personality.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded-2"
                        src="https://xploringindia.in/wp-content/uploads/2022/01/Chef-Atul-Kochhar.jpg"
                        alt="Second slide"
                        style={{height: '400px'}}
                    />

                    {/* <Carousel.Caption>
                        <h3>Chef Ranveer Brar</h3>
                        <p>Chef Ranveer Brar is a household name and one of the top chefs in India. </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded-2"
                        src="https://xploringindia.in/wp-content/uploads/2022/01/Chef-Kunal-Kapur.jpg"
                        alt="Third slide"
                        style={{height: '400px'}}
                    />
{/* 
                    <Carousel.Caption className='carousel-caption'>
                        <h3>Chef Kunal Kapur</h3>
                        <p>
                        Kunal Kapur is an Indian celebrity chef, restaurateur and a TV personality who began his career around 2000 with the Taj Group of Hotels.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default CarouselItam;