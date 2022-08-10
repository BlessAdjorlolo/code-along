import React from "react";
import NavItem from "./Navitem";

function Navbar() {
    return (
    <nav className="flex justify-between py-5 px-40  shadow-md">
        <h2 className="font-bold">Davi's Kenkey Boutique</h2>
        <ul className="flex gap-5">
            <NavItem menu="Home" />
            <NavItem menu="Products" />
            <NavItem menu="Services" />
            <NavItem menu="About" />
            <NavItem menu="Contact" />
        </ul>
    </nav>
    );
}

export default Navbar;