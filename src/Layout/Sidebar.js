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

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    Dashboard
                </a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Menu
            </div>

            <Link to="/images">
            <MenuItem menuname="Images" menuicon="fas fa-fw fa-images" route="images"/>
            </Link>
            <Link to="/posts">
            <MenuItem menuname="Posts" menuicon="fas fa-fw fa-file-alt" route="posts"/>
            </Link>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div className="sidebar-card">
                <img className="sidebar-card-illustration mb-2" src={process.env.PUBLIC_URL + "/assets/img/undraw_rocket.svg"} alt=""/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    );
  }

}

export default Sidebar;