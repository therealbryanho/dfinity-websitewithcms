import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../index.css";
import Home from "./home";
import Test from "./test";

function App() {
    const pages = [ // define your pages
        { name: "Home", path: "/", element: <Home /> },
        { name: "Test", path: "/test", element: <Test /> }
    ];

    const [pageIndex, setPageIndex] = useState(0); // index 0 which refers to pages[0] 

    const pageChange = (path) => { // Method passed into Navbar to change pages
        let index = pages.findIndex(page => page.path === path); // Check if path is defined in pages
        if (index >= 0) {
            setPageIndex(index); // set the new page to show
        }
    }

    return (
        <>
            <Navbar pages={pages} setPage={(path) => pageChange(path)} />
            {pages[pageIndex].element}
            {/* <Footer /> */}
        </>
    );
}

export default App;