import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link } from "react-router-dom"
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

class ForgetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		}
		this.forgotPassword = this.forgotPassword.bind(this)
	}

	forgotPassword(values, { setSubmitting, setErrors, setStatus, resetForm }) {
		var self = this
		axios.post(`${process.env.REACT_APP_BASE_URL}/api/user/forgot-password`, values)
			.then(function (response) {
				swal("Great", response.data.message, "success");
				resetForm({})
			})
			.catch(function (error) {
				console.log(error);
				{ swal("Ooooopps!!", error.response.data.message, "error"); } 
			});
	}
	render() {
		const ValidationSchema = Yup.object().shape({
			email: Yup.string().email('Invalid email').required('Email is required')
		});
		const nameStyle = {
            width: '349px',
            height: '38px'
        }
		return (
			<Formik initialValues={{ email: '' }} validationSchema={ValidationSchema} onSubmit={this.forgotPassword}>
				{({ dirty, values, setFieldValue, errors, touched, setFieldTouched, isValid, handleSubmit, isSubmitting }) => (
					<Auth bgImage="bg-password-image">
						<div className="text-center">
							<h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
							<p className="mb-4">We get it, stuff happens. Just enter your email address below
                                            and we'll send you a link to reset your password!</p>
						</div>
						<Form className="user">
							<div className="form-group">
								<Field id="email" name="email" type="text" placeholder="Enter Email Address..." className="form-control form-control-user" style={nameStyle} />
								{errors.email && touched.email ? (<div style={{ color: 'red' }}>{errors.email}</div>) : null}
							</div>
							<button type="submit" variant="primary" className="button button-align">
								Reset Password
                    </button>
						</Form>
						<hr />
						<div className="text-center">
							<Link to="/register" className="small">Create an Account</Link>
						</div>
						<div className="text-center">
							<Link to="/login" className="small">Already have an account? Login!</Link>
						</div>
					</Auth>
				)}
			</Formik>
		);
	}
}

export default ForgetPassword