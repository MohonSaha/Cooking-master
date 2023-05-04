import React from 'react';
import Banner from '../Banner/Banner'
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import CarouselItam from '../Carousel/CarouselItam';
import Subscribe from '../Subscribe/Subscribe';
import Chefs from '../Chefs/Chefs';


const Home = () => {

    const chefs = useLoaderData()

    

    return (
        <div>
            <Banner></Banner>
            

            <Container className='mt-5'>
                <Row>
                    <Col lg={9}>
                        
                        <Chefs>{chefs}</Chefs>
                    </Col>


                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                </Row>
            </Container>


            <CarouselItam></CarouselItam>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;