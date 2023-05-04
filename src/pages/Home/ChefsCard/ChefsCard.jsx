import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaArrowRight, FaHamburger, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../../../assets/banners/banner.jpg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ChefsCard.css'



const ChefsCard = ({ chef }) => {

    const [like, setLike] = useState(true);
    const { chefs_info, details, title, _id } = chef;

    const handleLikeButton = () => {
        toast.success('Successfully created!');
        setLike(false)
    }


    return (
        <div className='mt-4'>
            <Toaster />
            <Col>
                <Card className='position-relative card' style={{ height: '580px', width: '100%' }}>

                        <Card.Img className='rounded' variant="top" src={chefs_info?.img} />


                        {/* <LazyLoadImage src={chefs_info?.img} 
                            width={402} variant="top" height={250} PlaceholderSrc={PlaceholderImage}
                            effect="blur"
                            alt="Image Alt"
                            className='img-fluid'
                        /> */}



                    <Card.Body>
                        <Card.Title>{chefs_info?.name}</Card.Title>
                        <Card.Text>
                            {details.slice(0, 200)}<span>...</span>
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

                        <Link to={`/recipes/${_id}`}> <button className='btn-annmi w-100 position-absolute bottom-0 start-0 flex-grow-1 my-auto'>View Recipes <FaArrowRight className='ms-3'></FaArrowRight> </button></Link>


                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default ChefsCard;