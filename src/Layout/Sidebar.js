import React, { useState, Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Accordion } from 'react-bootstrap'

import '../Style/Sidebar.css'

class Sidebar extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            activeIds: []
        };
        this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick(id) {
        let activeId = this.state.activeIds;

        if( this.state.activeIds.some(item => id === item) === false) {
            activeId.push(id)
        } else {
            activeId = activeId.filter(item => item !== id)
        }

        this.setState({
            activeIds: activeId
        })
    }

    render() { 
        const {activeIds} = this.state

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
                        <Accordion.Toggle onClick={() => this.buttonClick(0)} as={Link} className={activeIds.some(item => 0 === item) === true ? 'nav-link dropdown active' : 'nav-link dropdown'} variant="link" eventKey="0">
                            <i className="fas fa-fw fa-users"></i>
                            <span>Employees</span>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div className="bg-white py-2 collapse-inner rounded">
                                    <Link to="/employee/all" className="collapse-item">All employees</Link>
                                    <Link to="/employee/create" className="collapse-item">Create employee</Link>
                                    </div>
                        </Accordion.Collapse>
                    </Accordion>
                </li>
                <li className="nav-item">
                    <Accordion>
                        <Accordion.Toggle onClick={() => this.buttonClick(1)} as={Link} className={activeIds.some(item => 1 === item) === true ? 'nav-link dropdown active' : 'nav-link dropdown'} variant="link" eventKey="1">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Projects</span>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <div className="bg-white py-2 collapse-inner rounded">
                                    <Link to="/project/all" className="collapse-item">All projects</Link>
                                    <Link to="/project/create" className="collapse-item">Create project</Link>
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