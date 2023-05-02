import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);


    const handleLogin = event =>{
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
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.message)
        })
    }
    


    return (
        <div>
            <Container className='mx-auto w-25 p-5 mt-5 rounded-1' style={{ backgroundColor: '#dbdbdb' }}>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
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

                    <Form.Text className="text-success">

                    </Form.Text>

                    
                </Form>
            </Container>
        </div>
    );
};

export default Login;