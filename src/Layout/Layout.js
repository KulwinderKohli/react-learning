import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Container, Button, ProgressBar, Row, Col } from 'react-bootstrap';

// Datepicker package
import DatePicker from "react-datepicker";
import "../Style/Datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(date) {
		console.log(date)
		this.setState({
			date: date
		})
	}

	render() {
		const { date } = this.state
		return (
			<div>
				<div id="wrapper">
					<Sidebar/>
						<div id="content-wrapper" className="d-flex flex-column">
		            		<div id="content">
								<Header/>
								<Container>
									<Row>
										<Col>
											<ProgressBar animated now={45} />
											<br/>
											<DatePicker
												locale="es"
												selected={date}
												onChange={this.handleChange}
											/>
											<Button variant="outline-success" size="sm">My First Button</Button>
										</Col>
									</Row>
								</Container>
							</div>
							<Footer text="Copyright OneBusiness"/>
						</div>
				</div>
			</div>
		);
	}
}

export default Layout
