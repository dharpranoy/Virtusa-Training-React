import React from 'react';
import CDetails from './contact';
import Form from './contact-form';

const Footer = () => {
    return (
        <>
           <div className='row'>
                <CDetails />
                <Form />
           </div> 
        </>
    );
}

export default Footer; 
