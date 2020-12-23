import React, { Component } from 'react'
import Layout from '../../Layout/Layout'
import { Form, Button } from 'react-bootstrap'

class Create extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			dob: '',
			userName: '',
			email: '',
			password: '',
			toc: '',
		};
		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit() {
		
	}

	render() {
		const {items} = this.state
		console.log(this.state)
		return (
			<Layout pageTitle="Create Employee">
				<div>
						<Form>
							<Form.Group controlId="employeeId">
								<Form.Label>Employee ID</Form.Label>
								<Form.Control type="text" disabled="true" />
							</Form.Group>

							<Form.Group controlId="firstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control name="firstName" type="text" onChange={this.onInputChange} value={this.state.firstName}/>
							</Form.Group>

							<Form.Group controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control name="lastName" type="text" onChange={this.onInputChange} value={this.state.lastName}/>
							</Form.Group>

							<Form.Group controlId="dob">
								<Form.Label>Date of Birth</Form.Label>
								<Form.Control type="date" name="dob" onChange={this.onInputChange} value={this.state.dob} />
							</Form.Group>

							<Form.Group controlId="userName">
								<Form.Label>User Name</Form.Label>
								<Form.Control type="text" name="userName" onChange={this.onInputChange} value={this.state.userName} />
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" name="email" onChange={this.onInputChange} value={this.state.formBasicEmail} />
								<Form.Text className="text-muted" >
									We'll never share your email with anyone else.
                            </Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="password" onChange={this.onInputChange} value={this.state.formBasicPassword} />
							</Form.Group>

							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" name="toc" label="I agree to terms and conditions" onChange={this.onInputChange} value="1" />
							</Form.Group>

							<Button variant="success" type="button" onClick={this.onSubmit}>Submit</Button>
						</Form>
					
				</div>
			</Layout>
		);
	}
}

export default Create