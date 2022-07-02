import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Profile from "../profile";
import ContactUS from "../contact";
import AboutUs from "../about";
import App from "../../App";
import Home from "../home";
import Blog from "../blog";
import CreatePost from "../createpost";

function Navigationbar (){
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand> <NavLink  to="/"> Reasoft</NavLink></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link> <NavLink  to="/home" >Home</NavLink></Nav.Link>
                                    <Nav.Link> <NavLink  to="/blog" >Blog</NavLink></Nav.Link>
                                    <Nav.Link> <NavLink  to="/profile">Profile</NavLink></Nav.Link>
                                    <Nav.Link ><NavLink  to="/contact">Contact</NavLink></Nav.Link>
                                    <Nav.Link ><NavLink to="/about">About us</NavLink></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<ContactUS />} />
                        <Route path="/createpost" element={<CreatePost />} />
                    </Routes>
                </div>

            </Router>

        );


}
export default Navigationbar;


