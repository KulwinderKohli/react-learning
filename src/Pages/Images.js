import React, { Component } from 'react';
import Header from './../Layout/Header';
import Sidebar from './../Layout/Sidebar';
import Footer from './../Layout/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loader from '../Components/Loader/Loader'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Helmet } from 'react-helmet';

const options = {
	settings: {
	  overlayColor: "rgb(25, 136, 124)",
	  autoplaySpeed: 1500,
	  transitionSpeed: 900,
	},
	buttons: {
		backgroundColor: 'rgba(30,30,36,0.8)',
		iconColor: 'rgba(255, 255, 255, 0.8)',
		iconPadding: '5px',
		showCloseButton: true,
		showFullscreenButton: true,
		showNextButton: true,
		showPrevButton: true,
		showThumbnailsButton: true,
		size: '40px'
	},
	caption: {
	  captionColor: "#a6cfa5",
	  captionFontFamily: "Raleway, sans-serif",
	  captionFontWeight: "300",
	  captionTextTransform: "uppercase",
	}
  };

class Images extends Component {
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
		fetch('https://api.unsplash.com/photos/?client_id=4u3ufPEI1nBh9lE46d4HKdOFHj3_HkxOeOAH1tpFClg')
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
                <Col lg={4} style={{marginBottom: '10px'}}>
				<SimpleReactLightbox options={options} >
					 <a href={post.urls.full} data-attribute="SRL">
					 <img src={post.urls.thumb} alt="No photos" />
					 </a>
                </SimpleReactLightbox >
            	</Col> 
					);
			} else {
				userPosts = <Col><h1 style={{textAlign: 'center'}}>No photos available.</h1></Col>
			}
		}

		return (
			<div id="wrapper">
				<Helmet>
                    <title>SB Admin | Images</title>
                </Helmet>
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
		);
	}
}
export default Images;