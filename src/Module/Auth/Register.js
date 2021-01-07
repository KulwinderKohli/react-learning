import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmPassword: '',
            successMessage: '',
            errorMessage:''
        }
        this.createAccount = this.createAccount.bind(this)
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createAccount(values) {
        var self = this
        axios.post('http://127.0.0.1:8000/api/user/register', values)
        .then(function (response) {
            self.setState({
                successMessage: response.data.message
            })
            swal("Registered successfully", "User Created", "success");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const RegistrationSchema = Yup.object().shape({
            name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is Required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'), 
            confirmPassword: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        });
        const nameStyle = {
            width: '349px',
            height: '38px'
        }
        return (
            <Formik initialValues={{name: '', email: '', password: '', confirmPassword: ''}} validationSchema={RegistrationSchema} onSubmit={this.createAccount}>
                {({ dirty, values, setFieldValue, errors, touched, setFieldTouched, isValid, handleSubmit, isSubmitting }) => (
                    <Auth bgImage="bg-register-image">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                            <Form className="user">
                                <div className="form-group">
                                    <Field id="name" name="name" type="text" placeholder="Name" className="form-control" style={nameStyle}/>
                                    {errors.name && touched.name ? (<div style={{ color: 'red' }}>{errors.name}</div>) : null}
                                </div>
                                <div className="form-group">
                                    <Field name="email" type="text" placeholder="email address" className="form-control" style={nameStyle} />
                                    {errors.email && touched.email ? (<div style={{ color: 'red' }}>{errors.email}</div>) : null}
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <Field name="password" type="password" placeholder="password" className="form-control" />
                                        {errors.password && touched.password ? (<div style={{ color: 'red' }}>{errors.password}</div>) : null}
                                    </div>
                                    <div className="col-sm-6">
                                        <Field name="confirmPassword" type="password" placeholder="confirm password" className="form-control" />
                                        {errors.confirmPassword && touched.confirmPassword ? (<div style={{ color: 'red' }}>{errors.confirmPassword}</div>) : null}
                                    </div>
                                </div>
                                <button type="submit" variant="primary" className="button button-align">Register Account</button>
                            </Form>
                            <hr />
                            <div className="flexbox-container text-center">
                                <Link to="/forget-password" className="small">Forgot Password?</Link>
                            </div>
                            <div className="flexbox-container text-center">
                                <Link to="/login" className="small">Already have an account? Login!</Link>
                            </div>
                    </Auth>
                )}
            </Formik>
        )
    }
}
export default Register