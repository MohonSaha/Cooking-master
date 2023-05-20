import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-25'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;