import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const header1 = React.createElement(
    "h1",
    {
        className:"header1",
        id:"header1",
    },
    "I'm a Header1"
)
const header2 = React.createElement(
    "h2",{
        className:"header2",
        id:"header2",
    },
    "I'm a Header2"
)
const container = React.createElement(
    "div",{
        className:"container",
        id:"container",
    },
    header1,"I'm Container",header2
)
root.render(container);
