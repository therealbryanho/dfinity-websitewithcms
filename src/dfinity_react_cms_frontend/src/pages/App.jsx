import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Test from "./Test";



function App(props) {
    const pages = [ // define your pages here
        { name: "Home", path: "/", element: <Home /> },
        { name: "Test", path: "/test", element: <Test /> },
    ];

    return (
        <BrowserRouter>
            <Navbar pages={pages} />
            <Routes>
                {pages.map((page) => {
                    return (<Route exact key={page.name} path={page.path} element={page.element} />)
                })
                }
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;