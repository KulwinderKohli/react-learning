//'use strict';

import React, { Component } from 'react';
import MenuItem from '../Components/MenuItem';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
//import rocket from '../../public/assets/img/undraw_rocket'


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

            <MenuItem menuname="Images" menuicon="fas fa-fw fa-images" route="images"/>
            <MenuItem menuname="Posts" menuicon="fas fa-fw fa-file-alt" route="posts"/>
            <MenuItem menuname="Employee" menuicon="fas fa-fw fa-users" route="employees"/>

            <hr className="sidebar-divider d-none d-md-block" />

        </ul>
    );
  }

}

export default Sidebar;