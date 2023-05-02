import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div>
            <Container className='mx-auto w-25 px-5 py-3 mt-5 rounded' style={{ backgroundColor: '#dbdbdb' }}>
                <h3>Please Register</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                        type="checkbox"
                         name="accept" 
                         label={<Link to="/terms" className='text-decoration-none'>Accept terms and conditions</Link>} />
                    </Form.Group>

                    <Button className='w-100' variant="dark" type="submit">
                        Register
                    </Button><br />

                    <Form.Text className="text-secondary">
                        Already have account <Link className='text-decoration-none text-danger' to='/login'>Login</Link>
                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>

                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;