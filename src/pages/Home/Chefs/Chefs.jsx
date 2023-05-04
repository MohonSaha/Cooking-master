import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ChefsCard from '../ChefsCard/ChefsCard';
import { useNavigation } from 'react-router';

const Chefs = ({ children }) => {

    const chefs = children;
    // const navigation = useNavigation();
    // console.log(navigation.state);
    // const []
    
    // const [loading, setLoading] = useState(true);
    // const [chefs, setChefs] = useState([]);
    // useEffect(()=>{
    //     fetch('https://cooking-master-server-ten.vercel.app/chefs')
    //     .then(res=> res.json())
    //     .then
    // } ,[])


    return (
        <div className='mt-3'>
            {/* <div>{navigation.state === 'loading' && 'i am coming'}</div> */}

            <h5 className=' w-50 '><span className='fw-2 fs-4'>Top reted chefs</span></h5>
            
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

                {/* <div className='card-container'>

                </div> */}




        </div>
    );
};

export default Chefs;