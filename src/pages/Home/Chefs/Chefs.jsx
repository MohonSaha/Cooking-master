import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaEye, FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';

const Chefs = () => {

    const chefs = useLoaderData()
    console.log(chefs);

    return (
        <div>
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