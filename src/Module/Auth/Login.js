import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom"
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import { reactLocalStorage } from 'reactjs-localstorage';

class Login extends Component {
	constructor(props) {
        super(props);
        this.state = {
			errorMesssage: ''
        }
        this.login = this.login.bind(this)
	}
	
	login(values, { setSubmitting, setErrors, setStatus, resetForm }) {
		var self = this
		axios.post(`${process.env.REACT_APP_BASE_URL}/api/user/login`, values)
		.then(function (response) {
			reactLocalStorage.setObject('user', response.data.user);
			reactLocalStorage.set('accessToken', response.data.accessToken)
			self.props.history.push('/')
		})
		.catch(function (error) {
			console.log(error)
			swal("Ooooopps!!", error.response.data.message, "error");
		});
	}

	render() {

		const LoginSchema = Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().max(50, 'Too Long!').required('Password is required'), 
        });

        const nameStyle = {
            width: '349px',
            height: '38px'
		}

		
		return (
			<Formik initialValues={{email: '', password: ''}} validationSchema={LoginSchema} onSubmit={this.login}>
                {({ dirty, values, setFieldValue, errors, touched, setFieldTouched, isValid, handleSubmit, isSubmitting }) => (
			<Auth bgImage="bg-login-image">
				<div className="text-center">
					<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
				</div>
				<Form className="user">
					<div className="form-group">
					<Field name="email" type="text" placeholder="Email address" className="form-control" style={nameStyle} />
                        {errors.email && touched.email ? (<div style={{ color: 'red' }}>{errors.email}</div>) : null}
					</div>
					<div className="form-group">
					<Field name="password" type="password" placeholder="Password" className="form-control" />
                        {errors.password && touched.password ? (<div style={{ color: 'red' }}>{errors.password}</div>) : null}
					</div>
					<div className="form-group">
						<div className="custom-control custom-checkbox small">
							<input type="checkbox" className="custom-control-input" id="customCheck" />
							<label className="custom-control-label" for="customCheck">Remember Me</label>
						</div>
					</div>
					<button type="submit" variant="primary" className="button button-align">Login</button>
				</Form>
                  <hr/>
				<div className="text-center">
				<Link to="/forget-password"  className="small">Forgot Password?</Link>
				</div>
				<div className="text-center">
				<Link to="/register"  className="small">Create an Account</Link>
				</div>
			</Auth>
			)}
            </Formik>
		);
	}
}

export default withRouter(Login)