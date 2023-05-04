import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { Button, Card, Container } from 'react-bootstrap';
import { FaQuestion, FaRegSun } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import profile from '../../../assets/logos/user.png'

const Profile = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handdleLogOut = () => {
        logOut()
            .then(() =>{
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    return (
        <Container className='d-flex align-items-center justify-content-center my-5'>
            <Card className='py-2 px-2 w-25'>
                <Card.Img style={{width: '150px'}}  className='rounded-circle  ' variant="top" src={user?.photoURL ? user?.photoURL : profile} />
                <Card.Body>
                    <Card.Title>{user?.displayName}</Card.Title>
                    <Card.Text>
                        <p>Email: <span>{user?.email}</span></p>
                    </Card.Text>


                    <p className='mb-2'><FaRegSun style={{ width: '20px', height: '20px' }} className='bg-secondary rounded-circle'></FaRegSun> <span className=''>Settings & Privacy</span></p>

                    <p className='mb-2'><FaQuestion style={{ width: '20px', height: '20px' }} className='bg-secondary rounded-circle'></FaQuestion> Help & Support</p>

                    <Button onClick={handdleLogOut} className='mt-4' variant="dark w-100">Log Out</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;