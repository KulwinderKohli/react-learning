import React, { Component } from 'react'
import Layout from '../../Layout/Layout'
import { Form, Button } from 'react-bootstrap'

/*const initialValues = {
	firstName: '',
	lastName: '',
	dateOfBirth: '',
	userName: '',
	email: '',
	password: '',
	checkbox: ''

}

const onSubmit = values => {
	console.log('Form data', values)
}

const validationSchema = Yup.object({
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	dateOfBirth: Yup.string().required('Company is required'),
	userName: Yup.string().required('User Name is required'),
	email: Yup.string().email('Invalid email format').required('Email is required'),
	password: Yup.string().required('Password is required'),
	checkbox: Yup.string().required('Confirmation is required'),
})*/
const btnStyle = {
	backgroundColor: '#008CBA'
}
class Create extends Component {
	render() {
		return (
			<Layout pageTitle="SB Admin2 | Create Employee">
				<div>
						<Form>
							<Form.Group controlId="employeeId">
								<Form.Label>Employee ID</Form.Label>
								<Form.Control type="text" disabled="true" />
							</Form.Group>

							<Form.Group controlId="firstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group controlId="dob">
								<Form.Label>Date of Birth</Form.Label>
								<Form.Control type="date" name="dob" />
							</Form.Group>

							<Form.Group controlId="userName">
								<Form.Label>User Name</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" />
								<Form.Text className="text-muted" >
									We'll never share your email with anyone else.
                            </Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" />
							</Form.Group>

							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="I agree to terms and conditions" />
							</Form.Group>

							<Button variant="primary" type="submit" style={btnStyle}>
								Submit
                        </Button>
						</Form>
					
				</div>
			</Layout>
		);
	}
}

export default Create