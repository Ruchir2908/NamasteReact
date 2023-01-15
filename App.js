import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);