import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link } from "react-router-dom"

class ForgetPassword extends Component {
	render() {
		return (
			<Auth bgImage="col-lg-6 d-none d-lg-block bg-password-image">
				<div className="text-center">
					<h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
					<p className="mb-4">We get it, stuff happens. Just enter your email address below
                                            and we'll send you a link to reset your password!</p>
				</div>
				<form className="user">
					<div className="form-group">
						<input type="email" className="form-control form-control-user"
							id="exampleInputEmail" aria-describedby="emailHelp"
							placeholder="Enter Email Address..." />
					</div>
					<button href="login.html" variant="primary" className="button button-align">
						Reset Password
                    </button>
				</form>
                 <hr/>
				<div className="text-center">
				<Link to="/register"  className="small">Create an Account</Link>
				</div>
				<div className="text-center">
				<Link to="/login"  className="small">Already have an account? Login!</Link>
				</div>
			</Auth>

		);
	}
}

export default ForgetPassword