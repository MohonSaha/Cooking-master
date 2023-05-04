import React from 'react';
import { Button, Container } from 'react-bootstrap';
const ref = React.createRef();
import Pdf from "react-to-pdf";

const Blog = () => {
    return (
        <Container className='my-5'>
            <Button className='my-4 ms-2 ' size="sm">Download Pdf</Button>

            <div className="App">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                </Pdf>
                {/* <div ref={ref}>
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div> */}
            </div>


            <div>
                <h4>1. The difference between nodejs and express js</h4>
                <div className='ms-4'>

                    <p className='mb-0'><strong>The primary difference between Node.js and Express.js is their purpose.</strong> Node.js is a JavaScript runtime environment that allows developers to write server-side code using JavaScript. It provides a runtime environment that is optimized for server-side development and allows developers to write efficient and scalable code.
                        Express.js, on the other hand, is a web application framework that builds on top of Node.js. It provides a set of tools and features that simplify the process of building web and mobile applications. It includes routing, middleware, and template engines that make it easier to build web applications.</p>
                    <p><strong>Another key difference between Node.js and Express.js is their level of abstraction.</strong> Node.js is a lower-level technology that provides developers with access to the underlying system resources. It allows developers to write code that interacts directly with the operating system, network, and file system. Express.js, on the other hand, is a higher-level technology that abstracts away many of the low-level details of web development. It provides a simpler, more streamlined API that makes it easier to build web applications.</p>
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

        </Container>
    );
};

export default Blog;