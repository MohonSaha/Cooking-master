import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaEye, FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';
import LazyLoad from 'react-lazy-load';

const Chefs = ({ children }) => {

    const chefs = children;


    return (
        <div className='mt-3'>
            <h5 className=' w-50 '><span className='fw-2 fs-4'>Top reted chefs</span></h5>
            
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (

                        <>
                            {
                                chefs.map(chef => <ChefsCard
                                    key={chef._id}
                                    chef={chef}
                                ></ChefsCard>)
                            }
                        </>

                    ))}
                </Row>




        </div>
    );
};

export default Chefs;