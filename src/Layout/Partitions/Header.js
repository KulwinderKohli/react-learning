import React, { Component } from 'react'
import Search from '../../Components/Search'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const style = {
    width: '70px',
    height: '40px',
    paddingTop: '20px'
}

const fontStyle = {
    fontWeight: '400',
    color: ''
}

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                <Search placeholder="Search for employees" btnclass="success" />
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="e-caret-hide" >
                            <i className="fas fa-bell fa-fw"></i>
                            <span className="badge badge-danger badge-counter">3+</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show" aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">ALERTS CENTER</h6>
                                <Dropdown.Item href="#/action-1" className="dropdown-item d-flex align-items-center">
                                    <div className="mr=3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                                  A new monthly report is ready to download!
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className="dropdown-item d-flex align-items-center">
                                        <div className="mr=3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className="dropdown-item d-flex align-items-center">
                                        <div className="mr=3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-exclamation-triangle text-gray-400"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            <div>Spending Alert: We've noticed unusually high spending for your account.</div>
                                        </div>
                                </Dropdown.Item>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown style={style}>
                        <Dropdown.Toggle id="dropdown-basic" >
                            <i className="fas fa-envelope fa-fw"></i>
                            <span className="badge badge-danger badge-counter">7</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show" aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">MESSAGE CENTER</h6>
                                <Dropdown.Item href="#/action-1" className="dropdown-item d-flex">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src={process.env.PUBLIC_URL + "/assets/img/undraw_profile_1.svg"}
                                                alt="" />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className="dropdown-item d-flex">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src={process.env.PUBLIC_URL + "/assets/img/undraw_profile_2.svg"}
                                                alt="" />
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className="dropdown-item d-flex">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src={process.env.PUBLIC_URL + "/assets/img/undraw_profile_3.svg"}
                                                alt="" />
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-4" className="dropdown-item d-flex">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                alt="" />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-5" className="dropdown-item text-center small text-gray-500">
                                   Read More Messages
                                </Dropdown.Item>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link" href="#" id="userDropdown" role=""
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span style={fontStyle}>Douglas McGee</span>
                                    <img className="img-profile rounded-circle"
                                        src={process.env.PUBLIC_URL + "/assets/img/undraw_profile.svg"} />
                                </a>
                            </li>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-2">
                                <Link to="/settings">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <Link to="/activitylog">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="/login ">
                                <Link to="/login" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav>
        );
    }
}

export default Header