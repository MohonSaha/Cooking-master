import React from 'react';
import picture1 from '../../../assets/banners/carousel1.jpg'
import picture2 from '../../../assets/banners/carousel2.jpg'
import picture3 from '../../../assets/banners/carousel3.jpg'
import { Carousel, Container } from 'react-bootstrap';

const CarouselItam = () => {
    return (
        <Container className='my-5'>
            <h2 className='mb-4'>Top of the year: <span className='cooking-primary'>2023</span></h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded-2"
                        src={picture2}
                        alt="First slide"
                        style={{height: '400px'}}

                    />
                    <Carousel.Caption>
                        <h3 className='text-light'>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded-2"
                        src={picture3}
                        alt="Second slide"
                        style={{height: '400px'}}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  rounded-2"
                        src={picture1}
                        alt="Third slide"
                        style={{height: '400px'}}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default CarouselItam;