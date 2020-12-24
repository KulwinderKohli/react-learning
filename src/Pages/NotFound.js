import React, { Component } from 'react'
import Header from '../Layout/Partitions/Header'
import Sidebar from '../Layout/Partitions/Sidebar'
import Footer from '../Layout/Partitions/Footer'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const style = {
    paddingBottom: '50px',
    paddingTop: '120px'
}
const errorTxt = {
    paddingTop: '10px'
}

const contentAlign = {
    paddingBottom: '175px'
}
class Images extends Component {

    render() {
        return (
            <div id="wrapper">
                <Helmet>
                    <title>404 | Not Found</title>
                </Helmet>
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <Header />
                    <div className="container-fluid">
                        <div className="text-center" style={contentAlign}>
                            <div className="error mx-auto" data-text="404">
                            </div>
                            <p className="lead text-gray-800 mb-5" style={style}>Page Not Found</p>
                            <p className="text-gray-500 mb-0" style={errorTxt}>It looks like you found a glitch in the matrix...</p>
                            <Link to="/">Back to Dashboard</Link>
                        </div>
                    </div>
                    <Footer text="Copyright SB Admin2 2020" />
                </div>
            </div>
        );
    }
}
export default Images;