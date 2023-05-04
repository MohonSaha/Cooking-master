import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className=''>
            <section >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Link to="/" className="link_404"><button className='primary-btn'>Go to Home</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default ErrorPage;