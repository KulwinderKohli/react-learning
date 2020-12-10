import React, { Component } from 'react';
import Header from './../Layout/Header';
import Sidebar from './../Layout/Sidebar';
import Footer from './../Layout/Footer';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

class Images extends Component {

    render() {
        return (
            <div id="wrapper">
                <Helmet>
                    <title>404 | Not Found</title>
                </Helmet>
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            <div className="text-center">
                                <div className="error mx-auto" data-text="404">
                                </div>
                                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                                <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                                <Link to="/">Back to Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <Footer text="Copyright OneBusiness 2020" />
                </div>
            </div>
        );
    }
}
export default Images;