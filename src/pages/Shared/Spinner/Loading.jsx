import React from 'react';
import './Spinner.css'

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-50'>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;