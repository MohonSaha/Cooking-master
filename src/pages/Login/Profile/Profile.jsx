import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { Button, Card, Container } from 'react-bootstrap';
import { FaQuestion, FaRegSun } from 'react-icons/fa';

const Profile = () => {

    const { user, logOut } = useContext(AuthContext);

    logOut()
        .then()
        .catch(error => console.log(error))

    return (
        <Container className='d-flex align-items-center justify-content-center my-5'>
            <Card className='py-3 px-2'>
                <Card.Img className='rounded-circle w-50' variant="top" src={user?.photoURL} />
                <Card.Body>
                    <Card.Title>{user?.displayName}</Card.Title>
                    <Card.Text>
                        <p>Email: <span>{user?.email}</span></p>
                    </Card.Text>


                    <p className='mb-2'><FaRegSun style={{ width: '20px', height: '20px' }} className='bg-secondary rounded-circle'></FaRegSun> <span className=''>Settings & Privacy</span></p>

                    <p className='mb-2'><FaQuestion style={{ width: '20px', height: '20px' }} className='bg-secondary rounded-circle'></FaQuestion> Help & Support</p>

                    <Button className='mt-4' variant="dark w-100">Log Out</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;