import React, { Component } from 'react'
import Header from './Partitions/Header'
import Sidebar from './Partitions/Sidebar'
import Footer from './Partitions/Footer'
import { Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

class Layout extends Component {
	render() {
		const {children, pageTitle} = this.props
		return (
			<div>
				<div id="wrapper">
					<Helmet>
			            <title>SB Admin2 | {pageTitle}</title>
	                </Helmet>
					<Sidebar />
						<div id="content-wrapper" className="d-flex flex-column">
		            		<div id="content">
								<Header/>
								<Container>
									<Row>
										{children}
									</Row>
								</Container>
							</div>
							<Footer text="Copyright SB Admin 2020"/>
						</div>
				</div>
			</div>
		);
	}
}

export default Layout
