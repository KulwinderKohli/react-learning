import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Container, Button, ProgressBar, Row, Col } from 'react-bootstrap';
//TimeRange imports

import TimeRange from 'react-timeline-range-slider' 
import { endOfToday, format, set } from 'date-fns'
// Datepicker package
import DatePicker from "react-datepicker";
import "../Style/Datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';

//Timerange package
const now = new Date()
const getTodayAtSpecificHour = (hour = 12) =>
	set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 })

const selectedStart = getTodayAtSpecificHour()
const selectedEnd = getTodayAtSpecificHour(14)

const startTime = getTodayAtSpecificHour(7)
const endTime = endOfToday()

const disabledIntervals = [
	{ start: getTodayAtSpecificHour(16), end: getTodayAtSpecificHour(17) },
	{ start: getTodayAtSpecificHour(7), end: getTodayAtSpecificHour(12) },
	{ start: getTodayAtSpecificHour(20), end: getTodayAtSpecificHour(24) }
  ]
class Layout extends Component {

	
	  errorHandler = ({ error }) => this.setState({ error })  
	
	  onChangeCallback = selectedInterval => this.setState({ selectedInterval })  

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			error: false,  
		selectedInterval: [selectedStart, selectedEnd],
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
		const { date, error, selectedInterval } = this.state
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
								<br/>
								<TimeRange
								error={error}  
								ticksNumber={36} 
								selectedInterval={selectedInterval}
                                   timelineInterval={[startTime, endTime]}  
                                   onUpdateCallback={this.errorHandler}  
                                   onChangeCallback={this.onChangeCallback}
                                   disabledIntervals={disabledIntervals}  
                                />
							</div>
							<Footer text="Copyright OneBusiness"/>
						</div>
				</div>
			</div>
		);
	}
}

export default Layout
