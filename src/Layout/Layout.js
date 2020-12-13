import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Container, Row } from 'react-bootstrap'

class Layout extends Component {
	render() {
		return (
			<div>
				<div id="wrapper">
					<Sidebar/>
						<div id="content-wrapper" className="d-flex flex-column">
		            		<div id="content">
								<Header/>
								<Container>
								<i className="fa fa-refresh fa-spin"></i>
									<Row>
								{/*		{userPosts} */}
									</Row>
								</Container>
							</div>
							<Footer text="Copyright SB Admin2 2020"/>
						</div>
				</div>
			</div>
		);
	}
}

export default Layout
