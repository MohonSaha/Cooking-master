import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { updateProfile } from '@firebase/auth';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, logOut, user } = useContext(AuthContext);
    // const {viewName, setViewName} = useState(null);
    // const {viewPhoto, setViewPhoto} = useState(null);
    const navigate = useNavigate();


    const handleRegister = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        // PassWord validation System 
        if (!email) {
            setError('Please add your email adress')
            return;
        }
        else if (!password) {
            setError('Please add your password');
            return;
        }
        else if (password.length < 6) {
            setError("Please add at least 6 charecters");
            return;
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo)
                form.reset();
                logOut()
                    .then()
                    .catch(error => console.log(error))
                navigate('/login')

            })
            .catch(error => {
                console.log(error);
            })


            const updateUserData = (user, name, photo) =>{
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                })
                .then()
                .catch(error => console.log(error))
            }
    }


    return (
        <div>
            <Container className='mx-auto w-25 px-5 py-3 my-5 rounded' style={{ backgroundColor: '#dbdbdb' }}>
                <h3>Please Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Form.Text className="text-danger mt-0 mb-3 fs-6">
                        {error}
                    </Form.Text>

                    <Button className='w-100 mt-2' variant="dark" type="submit">
                        Register
                    </Button><br />

                    <Form.Text className="text-secondary">
                        Already have account? <Link className='text-decoration-none text-danger' to='/login'>Login</Link>
                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>


                </Form>
            </Container>
        </div>
    );
};

export default Register;