import React from 'react';  // ✅ Import React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    );
}

// Using JSX
const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
);

const username = "chai aur code"
// Using React.createElement
const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit Google',
    username
);

createRoot(document.getElementById('root')).render(
    reactElement
);
