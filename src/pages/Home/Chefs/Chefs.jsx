import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import ChefsCard from '../ChefsCard/ChefsCard';
import { useNavigation } from 'react-router';
import Loading from '../../Shared/Spinner/Loading';
// import Spinner from '../../Shared/Spinner/Loading';

const Chefs = () => {

    // const chefs = children;
    // const navigation = useNavigation();
    // console.log(navigation.state);
    // const []
    
    const [loading, setLoading] = useState(false);
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        setLoading(true)
        fetch('https://cooking-master-server-ten.vercel.app/chefs')
        .then(res=> res.json())
        .then(data => {
            setChefs(data)
            setLoading(false)
        })
        .catch(error => console.log(error))
        
    } ,[])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='mt-3'>

            <h5 className=' w-50 '><span className='fw-2 fs-4'>Top reted chefs</span></h5>
            
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (

                        <>
                            {
                                

                               !loading && chefs.map(chef => <ChefsCard
                                    key={chef._id}
                                    chef={chef}
                                ></ChefsCard>)
                            }
                        </>

                    ))}
                </Row>




        </div>
    );
};

export default Chefs;