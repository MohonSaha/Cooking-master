import React, { useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { FaHeart, FaRegThumbsUp } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleRecipes = ({ recipe }) => {

    // console.log(recipe);
    const { recipe_name, img, cooking_method, ingredients, rating } = recipe;

    const [like, setLike] = useState(true);

    const handleLikeButton = () => {
        toast.success('Successfully created!');
        setLike(false)
        console.log('i am gere');
    }

    return (
        <Container>
            <Toaster />


            <Col>
                <Card style={{ height: '650px' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className=' cooking-primary'>{recipe_name}</Card.Title>
                        <Card.Text>
                            <span className='fw-bold'>Cooking Method: </span>
                            <span className='text-secondary'>{cooking_method}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Ingredients: </span>
                            {ingredients.map(ing => <li className='my-0 text-secondary'>{ing} </li>)}
                        </Card.Text>
                    </Card.Body>


                    <Card.Footer className="text-muted">
                        <div className='d-flex align-items-center justify-content-between'>


                            <div className='flex-grow-1 d-flex align-items-center'>
                                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                                <span className='ms-2 mb-0 mt-1'>{rating}</span>
                            </div>

                            <div className=''>
                                <button className='like-btn' disabled={!like}>

                                    <FaHeart onClick={handleLikeButton} className={`fs-3  heart-btn ${like ? 'text-secondary' : 'cooking-primary'}`}></FaHeart>
                                </button>
                            </div>
                        </div>
                    </Card.Footer>

                </Card>
            </Col>
        </Container>
    );
};

export default SingleRecipes;



