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
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// react element
// const head1=React.createElement("h1",{id:"title",key:"h1"},"heading 1"); 
// const head2=React.createElement("h2",{id:"title",key:"h2"},"heading 2");
// const head2=(
// <h1 id="title" key="h2">Aman</h1>
// );
// const Head3=()=> (
// <h1 id="title" key="h2">Aman</h1>
// );
// console.log(head1);
// const con=React.createElement("div",{id:"container"},[head1,head2]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root2.render(con);

// const Header = ()=>{
//     return (
//     <div>
//         {head2}
//         <h1>functional comp</h1>
//         <Head3/>
//         {Head3()}
//     </div>
//     );
// };
// root.render(<Header/>);

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);