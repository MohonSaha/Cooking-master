import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import LeftNav from '../Shared/LeftNav/LeftNav';
import { FaArrowLeft, FaHamburger, FaRegClock, FaRegThumbsUp } from 'react-icons/fa';

const Recipes = () => {



    const [viewRecipe, setViewRecipe] = useState({});

    const dynamicId = useParams();
    const recipes = useLoaderData()

    useEffect(() => {
        if (recipes) {
            const viewData = recipes.find(recipe => recipe._id === dynamicId.id);
            setViewRecipe(viewData);
        }

    }, [])

    console.log(viewRecipe);

    const { _id, chefs_info, recipe_info, total_view, likes, details } = viewRecipe;


    return (
        <div>




            <Container className='mt-4'>
                <Row>
                    <Col lg={9}>
                        <Card className=" mt-4">
                            <Card.Img style={{ height: '450px' }} variant="top" src={chefs_info?.img} />
                            <Card.Body>
                                <Card.Title>{chefs_info?.name}</Card.Title>
                                <Card.Text>
                                    {details}
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

                                <Link to="/"> <button style={{borderRadius: '12px', paddingLeft: '10px', paddingRight: '10px'}} className='primary-btn' > <FaArrowLeft/> Back to Home</button></Link>

                            </Card.Body>
                            <Card.Footer className="text-muted">

                            <Card.Text className='d-flex align-items-center'>
                                    <FaRegThumbsUp className='me-1 fs-5 fw-bold text-primary'></FaRegThumbsUp>
                                    <div className='d-flex align-items-center'>
                                        <span className='me-1 fw-bold'></span>  {likes}
                                    </div>
                                </Card.Text>


                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Recipes;