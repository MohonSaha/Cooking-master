import React from 'react';
import { Accordion } from 'react-bootstrap';
import Adds from '../../../assets/banners/lifestyle-Poster.jpg'

const LeftNav = () => {
    return (
        <>
        <div>
            <h3 className='m-3'>Frequently asked <span className='cooking-primary'>questions</span></h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can we print a recipe from a food recipe website?</Accordion.Header>
                    <Accordion.Body>Look for a "Print" button on the recipe page. This will often bring up a printer-friendly version of the recipe that you can print out and keep in your kitchen.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can we adjust a recipe to fit my taste preferences?</Accordion.Header>
                    <Accordion.Body>Many recipe websites offer suggestions for ingredient substitutions or variations that can help you adjust the recipe to your liking. You can also experiment with different seasonings or cooking methods to find the perfect flavor.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How can we find recipes that fit my budget?</Accordion.Header>
                    <Accordion.Body>
                    Look for recipe websites that offer a "Budget" or "Cheap Eats" section. These recipes often use inexpensive ingredients and are designed to be affordable.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>How can we find recipes for a specific occasion, such as a holiday or party?</Accordion.Header>
                    <Accordion.Body>Many recipe websites offer sections dedicated to holiday or party recipes. You can also search for recipes by keyword, such as "Thanksgiving" or "summer barbecue".
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>How can we share a recipe with friends or family?</Accordion.Header>
                    <Accordion.Body>Look for social media sharing buttons on the recipe page, which allow you to share the recipe on platforms like Facebook or Twitter. You can also copy and paste the recipe link into an email or message to share with others.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <div className='w-100 mt-4'>
                <img className='rounded-2' style={{width:'100%'}} src={Adds} alt="" />
            </div>
        </div>
        
        </>
    );
};

export default LeftNav;