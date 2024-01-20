// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Correctly import createRoot
import ThreeScene from './ThreeScene';

const App = () => {
    return (
        <div>
            <ThreeScene />
        </div>
    );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement); // Use createRoot for React 18
root.render(<App />);
