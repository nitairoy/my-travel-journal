import React from "react";
import logo from "../images/logo.svg"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="My Travel Journal" className="logo-img" />
            <h2>My Travel Journal</h2>
        </nav>
    )
}