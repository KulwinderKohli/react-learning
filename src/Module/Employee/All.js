/*
* @Author: Kulwinder Kohli
* @Date:   2020-12-10 16:01:11
* @Last Modified by:   Kulwinder Kohli
* @Last Modified time: 2020-12-10 16:12:30
*/
import React, { Component } from 'react';
import Heading from '../../Components/Heading'

import { Helmet } from 'react-helmet';
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';
import Footer from '../../Layout/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';

class All extends Component {
	render() {
		const title = 'All employees'

		return (
			<div id="wrapper">
				<Helmet>
                    <title>{title}</title>
                </Helmet>
				<Sidebar/>
					<div id="content-wrapper" className="d-flex flex-column">
	            		<div id="content">
							<Header/>
							<Container>
							<i className="fa fa-refresh fa-spin"></i>
								<Row>
									<Heading heading={title}/>
								</Row>
							</Container>
						</div>
						<Footer text="Copyright OneBusiness 2020"/>
					</div>
			</div>
		);
	}
}

export default All