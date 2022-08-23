import React from "react";
import NavItem from "./NavItem";

const links = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Products",
        to: "/products",
    },
    {
        label: "Contact",
        to: "/contact",
    },
    {
        label: "About",
        to: "/about",
    },
    {
        label: "Task Manager",
        to: "/task-manager",
    },
]

function Navbar() {
    return (
    <nav className="flex justify-between py-5 px-40  shadow-md">
        <h2 className="font-bold">Logic Blog</h2>
        <ul className="flex gap-5">
           {
            links.map((link, index) => (<NavItem key={index} label ={link.label} to={link.to} />
           ))};
        </ul>
    </nav>
    );
}

export default Navbar;