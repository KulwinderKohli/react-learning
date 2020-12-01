import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loader from '../Components/Loader/Loader'

//import { SRLWrapper } from 'simple-react-lightbox'

class LightBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			isLoading: true
		};
		this.callApi = this.callApi.bind(this)
	}

	componentDidMount() {
		
	}

	callApi() {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(response => response.json())
			.then(json => this.setState({
				photos: json,
				isLoading: false
            }))
	}

	render() {
		const { photos, isLoading } = this.state

		// updating data to userPosts
		let userPosts 
		if (isLoading) {
			userPosts = <Col style={{textAlign: 'center'}}><Loader/><br/><Button onClick={this.callApi}>Load more photos</Button></Col>
		} else {
			if (photos.length > 0 ) {
				userPosts = photos.map((post, index) => 
			/*	<SrlWrapper>
                    <img src={photos.thumbnailUrl} alt="No Photos" />
                </SrlWrapper> */
                 <Col lg={6} style={{marginBottom: '10px'}}>
                <img src={photos.thumbnailUrl} alt="Photos" />
            </Col> 
					);
			} else {
				userPosts = <Col><h1 style={{textAlign: 'center'}}>No photos available.</h1></Col>
			}
		}

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
                                    {userPosts}
									</Row>
								</Container>
							</div>
							<Footer text="Copyright OneBusiness 2020"/>
						</div>
				</div>
			</div>
		);
	}
}

export default LightBox
