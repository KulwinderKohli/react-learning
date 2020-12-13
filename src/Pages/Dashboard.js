import React, { Component } from 'react'
import Header from './../Layout/Header'
import Sidebar from './../Layout/Sidebar'
import Footer from './../Layout/Footer'
import { Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

class Dashboard extends Component {
    render() {
        return (
            <div id="wrapper">
                <Helmet>
                    <title>SB Admin | Dashboard</title>
                </Helmet>
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <Container>
                            <i className="fa fa-refresh fa-spin"></i>
                            <Row>

                            </Row>
                        </Container>
                    </div>
                    <Footer text="Copyright SB Admin2 2020"/>
                </div>
            </div>
        );
    }
}

export default Dashboard