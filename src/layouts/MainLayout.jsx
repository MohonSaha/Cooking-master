import React from 'react';
import Header from '../pages/Shared/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Header/Navbar';
import Banner from '../pages/Home/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import CarouselItam from '../pages/Home/Carousel/CarouselItam';
import Subscribe from '../pages/Home/Subscribe/Subscribe';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Container className='mt-5'>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>


                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <CarouselItam></CarouselItam>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;