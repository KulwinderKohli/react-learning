import React, { Component } from 'react'
import Auth from '../../Layout/Auth.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: "",
            successMessage: "",
        };
        this.createAccount = this.createAccount.bind(this)
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(e) {
        this.setState({
            [e.target.name]: e.target.value  
        })
    }

    createAccount() {
        var self = this
        axios.post('http://lara.site/api/user/register', this.state)
        .then(function (response) {
            self.setState({
                successMessage: response.data.message
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const {name, email, password, confirmPassword, errorMessage, successMessage} = this.state
        let success;
        if (successMessage !== '') {
            success = <div class="alert alert-success">{successMessage}</div>
        }
        return (
            <Auth bgImage="bg-register-image">
                {success}
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <div className="user">
                    <div className="form-group row">
                        <div className="col-sm-12 mb-3 mb-sm-0">
                            <input name="name" type="text" className="form-control form-control-user" placeholder="Name" value={name} onChange={this.onChangeHandle}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" className="form-control form-control-user" placeholder="Email Address" value={email} onChange={this.onChangeHandle}/>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input name="password" type="password" className="form-control form-control-user" placeholder="Password" value={password} onChange={this.onChangeHandle}/>
                        </div>
                        <div className="col-sm-6">
                            <input name="confirmPassword" type="password" className="form-control form-control-user" placeholder="Repeat Password" value={confirmPassword} onChange={this.onChangeHandle}/>
                        </div>
                    </div>
                    <button variant="primary" className="button button-align" onClick={this.createAccount}>Register Account</button>
                </div>
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