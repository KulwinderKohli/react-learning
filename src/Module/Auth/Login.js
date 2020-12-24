import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link } from "react-router-dom"

class Login extends Component {
	render() {
		return (
			<Auth bgImage="bg-login-image">
				<div className="text-center">
					<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
				</div>
				<form className="user">
					<div className="form-group">
						<input type="email" className="form-control form-control-user"
							id="exampleInputEmail" aria-describedby="emailHelp"
							placeholder="Enter Email Address..." />
					</div>
					<div className="form-group">
						<input type="password" className="form-control form-control-user"
							id="exampleInputPassword" placeholder="Password" />
					</div>
					<div className="form-group">
						<div className="custom-control custom-checkbox small">
							<input type="checkbox" className="custom-control-input" id="customCheck" />
							<label className="custom-control-label" for="customCheck">Remember Me</label>
						</div>
					</div>
					<button href="login.html" variant="primary" className="button button-align">
						Login
                    </button>
				</form>
                  <hr/>
				<div className="text-center">
				<Link to="/forget-password"  className="small">Forgot Password?</Link>
				</div>
				<div className="text-center">
				<Link to="/register"  className="small">Create an Account</Link>
				</div>
			</Auth>
		);
	}
}

export default Login