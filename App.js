import React from "react";
import ReactDOM from "react-dom/client";

const JSXUse = () => {
    return <h1>JSX used here in React</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JSXUse/>);