import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
const ref = React.createRef();
import Pdf from "react-to-pdf";
import toast, { Toaster } from 'react-hot-toast';
import code from '../../assets/banners/banner.jpg';

const Blog = () => {

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [15, 15]
    };


    return (
        <Container className='my-5'>
            <Toaster />

            <div className="App">
                <Pdf targetRef={ref} options={options} filename="code-example.pdf">
                    {({ toPdf }) => <Button className='my-4 ms-2' size="sm" onClick={toPdf}>
                        <span className='d-flex align-items-center'>Download Pdf
                            <FaArrowDown className='ms-2'></FaArrowDown></span>
                    </Button>}
                </Pdf>
                <div ref={ref}>



                    <div>
                        <h4>1. The difference between nodejs and express js</h4>
                        <div className='ms-4'>

                            <p className='mb-0'><strong>The primary difference between Node.js and Express.js is their purpose.</strong> Node.js is a JavaScript runtime environment that allows developers to write server-side code using JavaScript. It provides a runtime environment that is optimized for server-side development and allows developers to write efficient and scalable code.
                                Express.js, on the other hand, is a web application framework that builds on top of Node.js. It provides a set of tools and features that simplify the process of building web and mobile applications. It includes routing, middleware, and template engines that make it easier to build web applications.</p>
                            <p><strong>Another key difference between Node.js and Express.js is their level of abstraction.</strong> Node.js is a lower-level technology that provides developers with access to the underlying system resources. It allows developers to write code that interacts directly with the operating system, network, and file system. Express.js, on the other hand, is a higher-level technology that abstracts away many of the low-level details of web development. It provides a simpler, more streamlined API that makes it easier to build web applications.</p>
                            <strong>Some key differences between Node.js and Express.js</strong>
                            <ul>
                                <li>Node.js is low-level and requires more manual configuration, while Express.js is higher-level and provides more abstractions and convenience.</li>
                                <li>Node.js can be used for building various types of applications, including desktop applications, command-line tools, and more, while Express.js is mainly focused on building web applications and APIs.</li>
                                <li> Node.js provides built-in modules for performing various tasks, such as file I/O, network communication, and more, while Express.js provides a set of features and tools for building web applications and APIs.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h4>2. What is a custom hook, and why will you create a custom hook?</h4>
                        <div className='ms-4'>

                            <p>Custom hook is a JavaScript function that allows us to reuse stateful logic across multiple components. Custom hooks are a powerful and flexible way to abstract complex logic and share it across components, making your code more reusable and easier to maintain. <br />

                                Custom hooks can be used to encapsulate any kind of logic that you would normally put in a component, such as fetching data from an API, managing state, handling subscriptions, or connecting to third-party libraries. By creating a custom hook, you can extract this logic into a separate function and reuse it across multiple components, without having to copy and paste the same code over and over again.</p>
                        </div>
                    </div>

                    <div>
                        <h4>3. The differences between uncontrolled and controlled components.</h4>
                        <div className='ms-4'>

                            <p className='mb-0'><strong>The primary difference between the controlled and uncontrolled components is how they manage state and handle user input.</strong></p>
                            <p>A controlled component is a React component that manages its state through props. This means that the parent component passes all of the necessary data and callbacks down to the controlled component as props. The controlled component uses these props to update its state and handle user input. When the user interacts with the controlled component, it triggers a callback function passed from the parent component, which updates the state and re-renders the component.</p>
                            <p>An uncontrolled component is a React component that manages its state internally. This means that the component has its own state and doesn't rely on props passed from the parent component to manage its state. When the user interacts with the uncontrolled component, it updates its internal state, which can be accessed later through a reference.</p>

                        </div>
                    </div>

                    <div>
                        <h4>4. How to validate React props using PropTypes?</h4>
                        <div className='ms-4'>

                            <p>React allows us to validate the props that are passed to a component using a built-in typechecking library called PropTypes. PropTypes helps to ensure that the props passed to the component are of the expected type and format, making your components more reliable and reusable. To use PropTypes, we need to import the PropTypes library from the 'prop-types' package in your component file. Then, we can define the propTypes property of our component and specify the expected data type and format for each prop.</p>

                            <p>If we have a component that expects a prop called "name" which should be a string, we can define it like this:</p>
                            <img className='' src='https://i.ibb.co/b7GRkr7/code.png' alt="" />

                            <p>This code sets the propTypes property of the MyComponent function to an object that specifies the name prop should be a string. If the prop passed to MyComponent is not a string, React will generate a warning in the console.

                                PropTypes provides a wide range of data types to validate props, including string, number, boolean, object, array, and more. we can also specify whether a prop is required, and you can define default values for props.

                                Using PropTypes to validate props helps ensure that our components work as intended and prevent potential errors in your application.</p>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    );
};

export default Blog;