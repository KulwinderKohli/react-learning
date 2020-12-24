import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link } from "react-router-dom"

class Register extends Component {
    render() {
        return (
            <Auth bgImage="col-lg-6 d-none d-lg-block bg-register-image">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user">
                    < div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                placeholder="First Name" />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                            placeholder="Email Address" />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" className="form-control form-control-user"
                                id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="col-sm-6">
                            <input type="password" className="form-control form-control-user"
                                id="exampleRepeatPassword" placeholder="Repeat Password" />
                        </div>
                    </div>
                    <button href="login.html" variant="primary" className="button button-align">
                        Register Account
                                </button>
                </form>
                <hr/>
                <div className="flexbox-container text-center">
                <Link to="/forget-password"  className="small">Forgot Password?</Link>
                </div>
                <div className="flexbox-container text-center">
                <Link to="/login"  className="small">Already have an account? Login!</Link>
                </div>
            </Auth>
        );
    }
}

export default Register