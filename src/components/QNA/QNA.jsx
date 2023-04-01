import React from 'react';
import './QNA.css'
const QNA = () => {
    return (
        <div className='qna'>
            <h1>Q&A</h1>
            <div>
                <h3>1. What's the difference between props and state?</h3>
                <p>Props and State are two ways to manage and pass data between components.</p>
                <p>Props are short for "properties" and are used to pass data from a parent component to its child components. Props are read-only, meaning they cannot be changed by the child component.On the other hand,State is used to manage the internal state of a component. Unlike props, state can be changed by the component itself. When a component's state changes, React will re-render the component to reflect the new state.</p>
                <p>Props are used to pass data down from a parent component to a child component, while State is used to manage the internal state of a component.</p>
            </div>
            <div>
                <h3>2. How useState works?</h3>
                <p>useState hook provides a way to manage state in a functional component by returning an array with the current state value and a function to update the state value. When the state is updated, React will automatically re-render the component with the new state value.</p>
            </div>
            <div>
                <h3>3. What can useEffect do excluding data load?</h3>
                <p>useEffect hook can be used for a variety of tasks other than just data loading. Here are some examples:</p>
                <ol>
                    <li>Updating the title of the document: useEffect can be used to update the title of the document when the component mounts or when certain state variables change.</li>
                    <li>Subscribing to events: useEffect can be used to subscribe to events such as window resize, mouse movement, or key presses.</li>
                    <li>Managing timers: useEffect can be used to start and stop timers.</li>
                </ol>
            </div>
            <div>
                <h3>4. How does React work?</h3>
                <p>React is a popular JavaScript library for building user interfaces.It works by breaking the UI down into a hierarchy of components and using a Virtual DOM to keep track of the state of the UI. When the state of the UI changes, React will update the Virtual DOM, diff it with the old Virtual DOM, and update the actual DOM with the changes. This allows React to create fast, efficient, and maintainable user interfaces.</p>
            </div>
        </div>
    );
};

export default QNA;