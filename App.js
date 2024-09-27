// created a server
// HMR Hot Module Replacement
// File Watcher algorithm - C++
// BUNDLING
// MINIFY
// Cleaning our Code
// Dev and Production Build
// Super Fast build algorithm
// Image Optimization
// Caching while development
// Compression
// Compatble with older version of browser
// HTTPS on dev
// port Number
// Consistent Hashing Algorithm
// Zero Config
// tree shaking - removing unwanted
// transitive dependencies

import React from "react";
import ReactDOM from "react-dom/client";

const head1=React.createElement("h1",{id:"title",key:"h1"},"heading 1"); 
const head2=React.createElement("h2",{id:"title",key:"h2"},"heading 2");
console.log(head1);
const con=React.createElement("div",{id:"container"},[head1,head2]);
const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(con);


