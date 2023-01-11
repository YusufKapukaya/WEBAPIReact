import { NavLink } from "react-router-dom";
import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';



export class Navigation extends Component
{
    render()
    {
        return(
            <Navbar  expand="lg" bg="info" >
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-info text-white" to="/">Home</NavLink>
                <NavLink className="d-inline p-2 bg-info text-white" to="/department">Department</NavLink>
                <NavLink className="d-inline p-2 bg-info text-white" to="/employee">Employee</NavLink>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}