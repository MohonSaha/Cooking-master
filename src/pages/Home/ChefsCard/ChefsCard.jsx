import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaArrowRight, FaHamburger, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';

const ChefsCard = ({ chef }) => {


    const { chefs_info, details, title } = chef;
    // console.log(title);


    return (
        <div className='mt-5'>
            <Col>
                <Card className='position-relative' style={{height: '580px'}}>
                    <Card.Img className='rounded' variant="top" src={chefs_info?.img} />
                    <div className='m-3'>
                        <FaRegHeart style={{top: '10px', right: '10px'}} className='position-absolute text-light fs-3 text-danger cursor'></FaRegHeart>
                    </div>
                    <Card.Body>
                        <Card.Title>{chefs_info?.name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        <Card.Text className='d-flex align-items-center'>
                            <FaRegClock className='me-1 fs-5 fw-bold'></FaRegClock>
                            <div className='d-flex align-items-center'>
                                <span className='me-1 fw-bold'>Experience:</span>  {chefs_info?.experience} Years+
                            </div>
                        </Card.Text>

                        <Card.Text className='d-flex align-items-center'>
                            <FaHamburger className='me-1 fs-5 fw-bold'></FaHamburger>
                            <div className='d-flex align-items-center'>
                                <span className='me-1 fw-bold'>Aailable Recipes:</span>  {chefs_info?.recipes}
                            </div>
                        </Card.Text>

                        <button className='btn-annmi w-100 position-absolute bottom-0 start-0 flex-grow-1 my-auto'>View Recipes <FaArrowRight className='ms-3'></FaArrowRight> </button>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default ChefsCard;