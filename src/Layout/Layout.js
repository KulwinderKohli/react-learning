import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Layout extends Component {
	render() {
		return (
			<div>
				<div id="wrapper">
					<Sidebar/>
						<div id="content-wrapper" className="d-flex flex-column">
		            		<div id="content">
								<Header/>
								
							</div>
							<Footer text="Copyright OneBusiness"/>
						</div>
				</div>
			</div>
		);
	}
}

export default Layout
