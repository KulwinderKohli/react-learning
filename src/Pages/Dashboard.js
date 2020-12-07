import React, { Component } from 'react';
import Header from './../Layout/Header'
import Sidebar from './../Layout/Sidebar'
import Footer from './../Layout/Footer'
import { Container, Row } from 'react-bootstrap';

class Dashboard extends Component {
	render() {
		return (
			<div>
             <div id="wrapper">
                 <Sidebar />
                 <div id="content-wrapper" className="d-flex flex-column">
                     <div id="content">
                         <Header />
                         <Container>
                             <i className="fa fa-refresh fa-spin"></i>
                             <Row>
                                                
                             </Row>
                         </Container>
                     </div>
                     <Footer />
                 </div>
             </div>
         </div>
		);
	}
}

export default Dashboard