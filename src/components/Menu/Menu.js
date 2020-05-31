import React from 'react'
import * as ReactBootstrap from "react-bootstrap";

const Menu = () => {
    return (
        <div>
            <ReactBootstrap.Navbar expand="sm" bg="dark" variant="dark" sticky="top">
                <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link href="#home">About</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#features">Introduction</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#pricing">Skills</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#Resume">Resume</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#Projects">Projects</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#Contact">Contact</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar>
        </div>
    )
}

export default Menu;