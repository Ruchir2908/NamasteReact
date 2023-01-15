import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1>Ruchir Learning React</h1>;
}

const Header = () => {
    return (
        <>
            <div>
                {<Title/>}
            </div>

            <div>
                Testing Component Composition
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);