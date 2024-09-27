import React from "react";
import ReactDOM from "react-dom/client";

const head1=React.createElement("h1",{id:"title"},"heading 1"); 
const head2=React.createElement("h2",{id:"title"},"heading 2");
const con=React.createElement("div",{id:"container"},[head1,head2]);
const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(con);


