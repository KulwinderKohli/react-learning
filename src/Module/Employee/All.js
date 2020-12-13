/*
* @Author: Kulwinder Kohli
* @Date:   2020-12-10 16:01:11
* @Last Modified by:   Kulwinder Kohli
* @Last Modified time: 2020-12-10 16:12:30
*/
import React, { Component } from 'react'
import Heading from '../../Components/Heading'

import { Helmet } from 'react-helmet'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import { Container, Row, Table } from 'react-bootstrap'

class All extends Component {
	render() {
		const title = 'All employees'

		return (
			<div id="wrapper">
				<Helmet>
					<title>{title}</title>
				</Helmet>
				<Sidebar />
				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						<Header />
						<Container>
							<i className="fa fa-refresh fa-spin"></i>
							<Row>
								<Heading heading={title} />
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Employee ID</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>DOB</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Mark</td>
											<td>Otto</td>
											<td>@mdo</td>
											<td>05/09/1987</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Jacob</td>
											<td>Thornton</td>
											<td>@fat</td>
											<td>03/02/1983</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Larry the Bird</td>
											<td>John</td>
											<td>@twitter</td>
											<td>06/09/1991</td>
										</tr>
									</tbody>
								</Table>
							</Row>
						</Container>
					</div>
					<Footer text="Copyright SB Admin2 2020" />
				</div>
			</div>
		);
	}
}

export default All