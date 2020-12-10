import React, { Component } from 'react'
import MenuItem from '../Components/MenuItem'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Accordion } from 'react-bootstrap'

import '../Style/Sidebar.css'

class Sidebar extends Component {

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>
                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i> Dashboard
                </Link>
                </li>
                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Menu</div>

                <li className="nav-item">
                    <Accordion>
                        <Accordion.Toggle as={Link} className ="nav-link dropdown" variant="link" eventKey="0">
                            <i className="fas fa-fw fa-users"></i>
                            <span>Employees</span>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div className="bg-white py-2 collapse-inner rounded">
                                    <Link to="/employee/all" className="collapse-item">All Employees</Link>
                                    <Link to="/employee/create" className="collapse-item">Add Employee</Link>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        );
    }

}

export default Sidebar;