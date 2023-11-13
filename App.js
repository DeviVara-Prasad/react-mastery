import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX
const HeaderComponent = () =>{
    return <h1 className="header">This is Header</h1>;
}
const BodyComponent = () => <section className="body">This is Body</section>;

const element = <span>This is Span</span>
//component composition
const MixedComponent = () => {
    return <>
        <HeaderComponent/>
        <BodyComponent/>
        {element}
    </>
}

root.render(<MixedComponent/>);
