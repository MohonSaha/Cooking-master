import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // if('Firebase: Error (auth/wrong-password).'){
        //     setError("Email and password doesn't match")
        //     return;
        // }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // Handle Google signIn: 
    const handleGoogleSignIn = () => {
        setError('');

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        setError('');
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch()
    }



    return (
        <div>
            <Container className='login-page rounded-1' style={{ backgroundColor: '#dbdbdb' }}>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>


                    <Button className='w-100 mt-2' variant="dark" type="submit">
                        Login
                    </Button><br />

                    <Form.Text className="text-secondary">
                        Don't Have an account? <Link className='text-decoration-none text-danger' to='/register'>Register</Link>
                    </Form.Text>

                    <Button onClick={handleGoogleSignIn} className='mt-4 w-100' variant="outline-primary"><FaGoogle /> Login with Google</Button>

                    <Button onClick={handleGithubSignIn} className='mt-2 w-100' variant="outline-secondary"><FaGithub /> Login with Github</Button>

                    <Form.Text className="text-success">

                    </Form.Text>


                </Form>
            </Container>
        </div>
    );
};

export default Login;