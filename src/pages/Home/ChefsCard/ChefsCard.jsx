import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ChefsCard = ({ chef }) => {


    const { chefs_info, details, title } = chef;
    // console.log(title);


    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" src={chefs_info?.img} />
                <Card.Body>
                    <Card.Title>{chefs_info?.name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div >
    );
};

export default ChefsCard;